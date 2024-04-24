import { env } from 'node:process';

import browsersListToEsBuild from 'browserslist-to-esbuild';
import path from 'path';
import { Format, Options as TsupConfig } from 'tsup';

type Platform = 'browser' | 'node' | 'react-native';

type BuildOptions = {
    format: Format;
    platform: Platform;
};

const BROWSERSLIST_TARGETS = browsersListToEsBuild();

export function getPackageBuildConfig(): TsupConfig[] {
    return [
        getBuildConfig({ format: 'cjs', platform: 'node' }),
        getBuildConfig({ format: 'esm', platform: 'node' }),
        getBuildConfig({ format: 'cjs', platform: 'browser' }),
        getBuildConfig({ format: 'esm', platform: 'browser' }),
        getBuildConfig({ format: 'esm', platform: 'react-native' }),
    ];
}

export function getBuildConfig(options: BuildOptions): TsupConfig {
    const { format, platform } = options;
    return {
        define: {
            __BROWSER__: `${platform === 'browser'}`,
            __NODEJS__: `${platform === 'node'}`,
            __REACTNATIVE__: `${platform === 'react-native'}`,
            __VERSION__: `"${env.npm_package_version}"`,
        },
        entry: [`./src/index.ts`],
        esbuildOptions(options, context) {
            options.inject = [path.resolve(__dirname, 'env-shim.ts')];
            if (context.format === 'iife') {
                options.define = { ...options.define, __DEV__: `false` };
                options.target = BROWSERSLIST_TARGETS;
                options.minify = true;
            }
        },
        external: ['node:fs'],
        format,
        globalName: 'globalThis.kinobi',
        name: platform,
        // Inline private, non-published packages.
        // WARNING: This inlines packages recursively. Make sure these don't have deep dep trees.
        noExternal: [
            // @noble/hashes/sha256 is an ESM-only module, so we have to inline it in CJS builds.
            ...(format === 'cjs' ? ['@noble/hashes/sha256', '@noble/hashes/crypto'] : []),
        ],
        outExtension({ format }) {
            const extension =
                format === 'iife' ? `.production.min.js` : `.${platform}.${format === 'cjs' ? 'cjs' : 'js'}`;
            return { js: extension };
        },
        platform: platform === 'node' ? 'node' : 'browser',
        pure: ['process'],
        sourcemap: format !== 'iife',
        treeshake: true,
    };
}

export function getTestsBuildConfig(options: BuildOptions): TsupConfig[] {
    const { format, platform } = options;
    function outExtension() {
        return { js: `.${format === 'cjs' ? 'cjs' : 'js'}` };
    }
    return [
        {
            ...getBuildConfig(options),
            outDir: `./dist/tests-${platform}-${format}/src`,
            outExtension,
        },
        {
            ...getBuildConfig(options),
            bundle: false,
            entry: ['./test/**/*.ts'],
            outDir: `./dist/tests-${platform}-${format}/test`,
            outExtension,
        },
    ];
}