//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

/// Accounts.
pub struct CreateAccountWithSeed {
    pub payer: solana_program::pubkey::Pubkey,

    pub new_account: solana_program::pubkey::Pubkey,

    pub base_account: solana_program::pubkey::Pubkey,
}

impl CreateAccountWithSeed {
    pub fn instruction(
        &self,
        args: CreateAccountWithSeedInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: CreateAccountWithSeedInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(3 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.base_account,
            true,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = CreateAccountWithSeedInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::SYSTEM_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct CreateAccountWithSeedInstructionData {
    discriminator: u32,
}

impl CreateAccountWithSeedInstructionData {
    pub fn new() -> Self {
        Self { discriminator: 3 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct CreateAccountWithSeedInstructionArgs {
    pub base: Pubkey,
    pub seed: String,
    pub amount: u64,
    pub space: u64,
    pub program_address: Pubkey,
}

/// Instruction builder for `CreateAccountWithSeed`.
///
/// ### Accounts:
///
///   0. `[writable, signer]` payer
///   1. `[writable]` new_account
///   2. `[signer]` base_account
#[derive(Clone, Debug, Default)]
pub struct CreateAccountWithSeedBuilder {
    payer: Option<solana_program::pubkey::Pubkey>,
    new_account: Option<solana_program::pubkey::Pubkey>,
    base_account: Option<solana_program::pubkey::Pubkey>,
    base: Option<Pubkey>,
    seed: Option<String>,
    amount: Option<u64>,
    space: Option<u64>,
    program_address: Option<Pubkey>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl CreateAccountWithSeedBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn new_account(&mut self, new_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.new_account = Some(new_account);
        self
    }
    #[inline(always)]
    pub fn base_account(&mut self, base_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.base_account = Some(base_account);
        self
    }
    #[inline(always)]
    pub fn base(&mut self, base: Pubkey) -> &mut Self {
        self.base = Some(base);
        self
    }
    #[inline(always)]
    pub fn seed(&mut self, seed: String) -> &mut Self {
        self.seed = Some(seed);
        self
    }
    #[inline(always)]
    pub fn amount(&mut self, amount: u64) -> &mut Self {
        self.amount = Some(amount);
        self
    }
    #[inline(always)]
    pub fn space(&mut self, space: u64) -> &mut Self {
        self.space = Some(space);
        self
    }
    #[inline(always)]
    pub fn program_address(&mut self, program_address: Pubkey) -> &mut Self {
        self.program_address = Some(program_address);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateAccountWithSeed {
            payer: self.payer.expect("payer is not set"),
            new_account: self.new_account.expect("new_account is not set"),
            base_account: self.base_account.expect("base_account is not set"),
        };
        let args = CreateAccountWithSeedInstructionArgs {
            base: self.base.clone().expect("base is not set"),
            seed: self.seed.clone().expect("seed is not set"),
            amount: self.amount.clone().expect("amount is not set"),
            space: self.space.clone().expect("space is not set"),
            program_address: self
                .program_address
                .clone()
                .expect("program_address is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `create_account_with_seed` CPI accounts.
pub struct CreateAccountWithSeedCpiAccounts<'a, 'b> {
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,

    pub new_account: &'b solana_program::account_info::AccountInfo<'a>,

    pub base_account: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `create_account_with_seed` CPI instruction.
pub struct CreateAccountWithSeedCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,

    pub payer: &'b solana_program::account_info::AccountInfo<'a>,

    pub new_account: &'b solana_program::account_info::AccountInfo<'a>,

    pub base_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: CreateAccountWithSeedInstructionArgs,
}

impl<'a, 'b> CreateAccountWithSeedCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: CreateAccountWithSeedCpiAccounts<'a, 'b>,
        args: CreateAccountWithSeedInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            payer: accounts.payer,
            new_account: accounts.new_account,
            base_account: accounts.base_account,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(3 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.base_account.key,
            true,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = CreateAccountWithSeedInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::SYSTEM_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(3 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.new_account.clone());
        account_infos.push(self.base_account.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `CreateAccountWithSeed` via CPI.
///
/// ### Accounts:
///
///   0. `[writable, signer]` payer
///   1. `[writable]` new_account
///   2. `[signer]` base_account
#[derive(Clone, Debug)]
pub struct CreateAccountWithSeedCpiBuilder<'a, 'b> {
    instruction: Box<CreateAccountWithSeedCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> CreateAccountWithSeedCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateAccountWithSeedCpiBuilderInstruction {
            __program: program,
            payer: None,
            new_account: None,
            base_account: None,
            base: None,
            seed: None,
            amount: None,
            space: None,
            program_address: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn new_account(
        &mut self,
        new_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_account = Some(new_account);
        self
    }
    #[inline(always)]
    pub fn base_account(
        &mut self,
        base_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.base_account = Some(base_account);
        self
    }
    #[inline(always)]
    pub fn base(&mut self, base: Pubkey) -> &mut Self {
        self.instruction.base = Some(base);
        self
    }
    #[inline(always)]
    pub fn seed(&mut self, seed: String) -> &mut Self {
        self.instruction.seed = Some(seed);
        self
    }
    #[inline(always)]
    pub fn amount(&mut self, amount: u64) -> &mut Self {
        self.instruction.amount = Some(amount);
        self
    }
    #[inline(always)]
    pub fn space(&mut self, space: u64) -> &mut Self {
        self.instruction.space = Some(space);
        self
    }
    #[inline(always)]
    pub fn program_address(&mut self, program_address: Pubkey) -> &mut Self {
        self.instruction.program_address = Some(program_address);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = CreateAccountWithSeedInstructionArgs {
            base: self.instruction.base.clone().expect("base is not set"),
            seed: self.instruction.seed.clone().expect("seed is not set"),
            amount: self.instruction.amount.clone().expect("amount is not set"),
            space: self.instruction.space.clone().expect("space is not set"),
            program_address: self
                .instruction
                .program_address
                .clone()
                .expect("program_address is not set"),
        };
        let instruction = CreateAccountWithSeedCpi {
            __program: self.instruction.__program,

            payer: self.instruction.payer.expect("payer is not set"),

            new_account: self
                .instruction
                .new_account
                .expect("new_account is not set"),

            base_account: self
                .instruction
                .base_account
                .expect("base_account is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct CreateAccountWithSeedCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    new_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    base_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    base: Option<Pubkey>,
    seed: Option<String>,
    amount: Option<u64>,
    space: Option<u64>,
    program_address: Option<Pubkey>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
