type Addresses = {
    [K in string]: string | {
        address: K
    };
};

// TASK 1

// Helper function to enforce that the address property references existing keys
function createAddresses < T extends {
    [key: string]: string | {
        address: keyof T
    }
} > (addresses: T): T {
    return addresses;
}

// Usage
const createdAddresses = createAddresses({
    staking_program_id: "5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ",
    system_program_id: "11111111111111111111111111111111",
    locked_token_mint_id: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
    // The IDE should help autocomplete to existing keys for the address property
    reward_token_mint_id: {
        address: "staking_program_id"
    },
    // Uncomment below to see the error
    // invalid_reward_token_mint_id: { address: "invalid_key"},
});

function addresses(input: Addresses): void {
    // Function body is not required for this task.
}

// TASK 2

type InstructionInput = {
    addresses: Addresses;
    instructions: Record < string,
    {
        accounts: Array < {
            id: string;signer ? : true;address ? : keyof Addresses
        } >
    } > ;
};

function instructions(input: InstructionInput): typeof input["instructions"] {
    const resolveAddress = (address: string | {
        address: keyof Addresses
    }): string => {
        if (typeof address === "string") {
            return address;
        } else {
            const resolvedAddress = input.addresses[address.address];
            return typeof resolvedAddress === "string" ? resolvedAddress : resolveAddress(resolvedAddress);
        }
    };

    // Deep copy to avoid mutating the original input
    const resolvedInstructions = JSON.parse(JSON.stringify(input.instructions)); 
    
    for (const instructionKey in resolvedInstructions) {
        const instruction = resolvedInstructions[instructionKey];
        for (const accountKey in instruction.accounts) {
            const account = instruction.accounts[accountKey];
            if (account.address) {
                account.address = resolveAddress(input.addresses[account.address]);
            }
        }
    }

    return resolvedInstructions;
}

const input: InstructionInput = {
    addresses: {
        staking_program_id: "5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ",
        locked_token_mint_id: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
        reward_token_mint_id: {
            address: "locked_token_mint_id"
        },
        system_program_id: "11111111111111111111111111111111",
    },
    instructions: {
        admin_init: {
            accounts: [{
                    id: "admin_id",
                    signer: true
                },
                {
                    id: "program_id",
                    address: "staking_program_id"
                },
                {
                    id: "locked_token_mint_id",
                    address: "locked_token_mint_id"
                },
                {
                    id: "reward_token_mint_id",
                    address: "reward_token_mint_id"
                },
                {
                    id: "system_program_id",
                    address: "system_program_id"
                },
            ],
        },
    }
};



// TASK 3

// type AccountsWithoutAddress < T > = {
//     [P in keyof T]: T[P] extends {
//             accounts: Array < infer Account >
//         } ?
//         Account extends {
//             id: infer ID,
//             address ? : infer Address
//         } ?
//         Address extends undefined ? ID : never :
//         never : never;
// } [keyof T];


type AccountsWithoutAddress < T > = {
    [P in keyof T]: T[P] extends {
            accounts: Array < infer Account >
        } ?
        Account extends {
            id: infer ID,
            address ? : infer Address
        } ?
        ID :
        never : never;
} [keyof T];


type TestResult = AccountsWithoutAddress<typeof input.instructions> ;

function testFunction(id: TestResult) {
    console.log(id);
}

