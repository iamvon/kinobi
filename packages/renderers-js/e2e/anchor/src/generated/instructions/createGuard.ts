/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  addDecoderSizePrefix,
  addEncoderSizePrefix,
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getAddressEncoder,
  getArrayDecoder,
  getArrayEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getProgramDerivedAddress,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getUtf8Decoder,
  getUtf8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type Option,
  type OptionOrNullable,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/web3.js';
import { WEN_TRANSFER_GUARD_PROGRAM_ADDRESS } from '../programs';
import {
  expectAddress,
  getAccountMetaFactory,
  type ResolvedAccount,
} from '../shared';
import {
  getCpiRuleDecoder,
  getCpiRuleEncoder,
  getMetadataAdditionalFieldRuleDecoder,
  getMetadataAdditionalFieldRuleEncoder,
  getTransferAmountRuleDecoder,
  getTransferAmountRuleEncoder,
  type CpiRule,
  type CpiRuleArgs,
  type MetadataAdditionalFieldRule,
  type MetadataAdditionalFieldRuleArgs,
  type TransferAmountRule,
  type TransferAmountRuleArgs,
} from '../types';

export type CreateGuardInstruction<
  TProgram extends string = typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
  TAccountGuard extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintTokenAccount extends string | IAccountMeta<string> = string,
  TAccountGuardAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountAssociatedTokenProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountGuard extends string
        ? WritableAccount<TAccountGuard>
        : TAccountGuard,
      TAccountMint extends string
        ? WritableSignerAccount<TAccountMint> & IAccountSignerMeta<TAccountMint>
        : TAccountMint,
      TAccountMintTokenAccount extends string
        ? WritableAccount<TAccountMintTokenAccount>
        : TAccountMintTokenAccount,
      TAccountGuardAuthority extends string
        ? ReadonlySignerAccount<TAccountGuardAuthority> &
            IAccountSignerMeta<TAccountGuardAuthority>
        : TAccountGuardAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type CreateGuardInstructionData = {
  discriminator: ReadonlyUint8Array;
  name: string;
  symbol: string;
  uri: string;
  cpiRule: Option<CpiRule>;
  transferAmountRule: Option<TransferAmountRule>;
  additionalFieldsRule: Array<MetadataAdditionalFieldRule>;
};

export type CreateGuardInstructionDataArgs = {
  name: string;
  symbol: string;
  uri: string;
  cpiRule: OptionOrNullable<CpiRuleArgs>;
  transferAmountRule: OptionOrNullable<TransferAmountRuleArgs>;
  additionalFieldsRule: Array<MetadataAdditionalFieldRuleArgs>;
};

export function getCreateGuardInstructionDataEncoder(): Encoder<CreateGuardInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['name', addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
      ['symbol', addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
      ['uri', addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
      ['cpiRule', getOptionEncoder(getCpiRuleEncoder())],
      ['transferAmountRule', getOptionEncoder(getTransferAmountRuleEncoder())],
      [
        'additionalFieldsRule',
        getArrayEncoder(getMetadataAdditionalFieldRuleEncoder()),
      ],
    ]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([251, 254, 17, 198, 219, 218, 154, 99]),
    })
  );
}

export function getCreateGuardInstructionDataDecoder(): Decoder<CreateGuardInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['name', addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    ['symbol', addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    ['uri', addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    ['cpiRule', getOptionDecoder(getCpiRuleDecoder())],
    ['transferAmountRule', getOptionDecoder(getTransferAmountRuleDecoder())],
    [
      'additionalFieldsRule',
      getArrayDecoder(getMetadataAdditionalFieldRuleDecoder()),
    ],
  ]);
}

export function getCreateGuardInstructionDataCodec(): Codec<
  CreateGuardInstructionDataArgs,
  CreateGuardInstructionData
> {
  return combineCodec(
    getCreateGuardInstructionDataEncoder(),
    getCreateGuardInstructionDataDecoder()
  );
}

export type CreateGuardAsyncInput<
  TAccountGuard extends string = string,
  TAccountMint extends string = string,
  TAccountMintTokenAccount extends string = string,
  TAccountGuardAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  guard?: Address<TAccountGuard>;
  mint: TransactionSigner<TAccountMint>;
  mintTokenAccount?: Address<TAccountMintTokenAccount>;
  guardAuthority: TransactionSigner<TAccountGuardAuthority>;
  payer: TransactionSigner<TAccountPayer>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  tokenProgram?: Address<TAccountTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  name: CreateGuardInstructionDataArgs['name'];
  symbol: CreateGuardInstructionDataArgs['symbol'];
  uri: CreateGuardInstructionDataArgs['uri'];
  cpiRule: CreateGuardInstructionDataArgs['cpiRule'];
  transferAmountRule: CreateGuardInstructionDataArgs['transferAmountRule'];
  additionalFieldsRule: CreateGuardInstructionDataArgs['additionalFieldsRule'];
};

export async function getCreateGuardInstructionAsync<
  TAccountGuard extends string,
  TAccountMint extends string,
  TAccountMintTokenAccount extends string,
  TAccountGuardAuthority extends string,
  TAccountPayer extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
>(
  input: CreateGuardAsyncInput<
    TAccountGuard,
    TAccountMint,
    TAccountMintTokenAccount,
    TAccountGuardAuthority,
    TAccountPayer,
    TAccountAssociatedTokenProgram,
    TAccountTokenProgram,
    TAccountSystemProgram
  >
): Promise<
  CreateGuardInstruction<
    typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
    TAccountGuard,
    TAccountMint,
    TAccountMintTokenAccount,
    TAccountGuardAuthority,
    TAccountPayer,
    TAccountAssociatedTokenProgram,
    TAccountTokenProgram,
    TAccountSystemProgram
  >
> {
  // Program address.
  const programAddress = WEN_TRANSFER_GUARD_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    guard: { value: input.guard ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    mintTokenAccount: {
      value: input.mintTokenAccount ?? null,
      isWritable: true,
    },
    guardAuthority: { value: input.guardAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.guard.value) {
    accounts.guard.value = await getProgramDerivedAddress({
      programAddress,
      seeds: [
        getBytesEncoder().encode(
          new Uint8Array([
            119, 101, 110, 95, 116, 111, 107, 101, 110, 95, 116, 114, 97, 110,
            115, 102, 101, 114, 95, 103, 117, 97, 114, 100,
          ])
        ),
        getBytesEncoder().encode(
          new Uint8Array([103, 117, 97, 114, 100, 95, 118, 49])
        ),
        getAddressEncoder().encode(expectAddress(accounts.mint.value)),
      ],
    });
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb' as Address<'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'>;
  }
  if (!accounts.mintTokenAccount.value) {
    accounts.mintTokenAccount.value = await getProgramDerivedAddress({
      programAddress,
      seeds: [
        getAddressEncoder().encode(
          expectAddress(accounts.guardAuthority.value)
        ),
        getAddressEncoder().encode(expectAddress(accounts.tokenProgram.value)),
        getAddressEncoder().encode(expectAddress(accounts.mint.value)),
      ],
    });
  }
  if (!accounts.associatedTokenProgram.value) {
    accounts.associatedTokenProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.guard),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.mintTokenAccount),
      getAccountMeta(accounts.guardAuthority),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getCreateGuardInstructionDataEncoder().encode(
      args as CreateGuardInstructionDataArgs
    ),
  } as CreateGuardInstruction<
    typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
    TAccountGuard,
    TAccountMint,
    TAccountMintTokenAccount,
    TAccountGuardAuthority,
    TAccountPayer,
    TAccountAssociatedTokenProgram,
    TAccountTokenProgram,
    TAccountSystemProgram
  >;

  return instruction;
}

export type CreateGuardInput<
  TAccountGuard extends string = string,
  TAccountMint extends string = string,
  TAccountMintTokenAccount extends string = string,
  TAccountGuardAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  guard: Address<TAccountGuard>;
  mint: TransactionSigner<TAccountMint>;
  mintTokenAccount: Address<TAccountMintTokenAccount>;
  guardAuthority: TransactionSigner<TAccountGuardAuthority>;
  payer: TransactionSigner<TAccountPayer>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  tokenProgram?: Address<TAccountTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  name: CreateGuardInstructionDataArgs['name'];
  symbol: CreateGuardInstructionDataArgs['symbol'];
  uri: CreateGuardInstructionDataArgs['uri'];
  cpiRule: CreateGuardInstructionDataArgs['cpiRule'];
  transferAmountRule: CreateGuardInstructionDataArgs['transferAmountRule'];
  additionalFieldsRule: CreateGuardInstructionDataArgs['additionalFieldsRule'];
};

export function getCreateGuardInstruction<
  TAccountGuard extends string,
  TAccountMint extends string,
  TAccountMintTokenAccount extends string,
  TAccountGuardAuthority extends string,
  TAccountPayer extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
>(
  input: CreateGuardInput<
    TAccountGuard,
    TAccountMint,
    TAccountMintTokenAccount,
    TAccountGuardAuthority,
    TAccountPayer,
    TAccountAssociatedTokenProgram,
    TAccountTokenProgram,
    TAccountSystemProgram
  >
): CreateGuardInstruction<
  typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
  TAccountGuard,
  TAccountMint,
  TAccountMintTokenAccount,
  TAccountGuardAuthority,
  TAccountPayer,
  TAccountAssociatedTokenProgram,
  TAccountTokenProgram,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = WEN_TRANSFER_GUARD_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    guard: { value: input.guard ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    mintTokenAccount: {
      value: input.mintTokenAccount ?? null,
      isWritable: true,
    },
    guardAuthority: { value: input.guardAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb' as Address<'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'>;
  }
  if (!accounts.associatedTokenProgram.value) {
    accounts.associatedTokenProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.guard),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.mintTokenAccount),
      getAccountMeta(accounts.guardAuthority),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getCreateGuardInstructionDataEncoder().encode(
      args as CreateGuardInstructionDataArgs
    ),
  } as CreateGuardInstruction<
    typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
    TAccountGuard,
    TAccountMint,
    TAccountMintTokenAccount,
    TAccountGuardAuthority,
    TAccountPayer,
    TAccountAssociatedTokenProgram,
    TAccountTokenProgram,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedCreateGuardInstruction<
  TProgram extends string = typeof WEN_TRANSFER_GUARD_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    guard: TAccountMetas[0];
    mint: TAccountMetas[1];
    mintTokenAccount: TAccountMetas[2];
    guardAuthority: TAccountMetas[3];
    payer: TAccountMetas[4];
    associatedTokenProgram: TAccountMetas[5];
    tokenProgram: TAccountMetas[6];
    systemProgram: TAccountMetas[7];
  };
  data: CreateGuardInstructionData;
};

export function parseCreateGuardInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateGuardInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 8) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      guard: getNextAccount(),
      mint: getNextAccount(),
      mintTokenAccount: getNextAccount(),
      guardAuthority: getNextAccount(),
      payer: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      tokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCreateGuardInstructionDataDecoder().decode(instruction.data),
  };
}