import React, { useEffect, useState } from "react";

// Dummy async function
const get_transaction_data = async () => {
    return new Promise((resolve) => {
        resolve([
            { wallet_address: "0x123ABC...", ETH_sent: 5, ETH_received: 2 },
            { wallet_address: "0x456DEF...", ETH_sent: 1, ETH_received: 3 },
            {
                wallet_address: "0x789GHI...",
                ETH_sent: 2.5,
                ETH_received: 1.2,
            },
        ]);
    });
};

function TransactionInfo() {
    const [transactionData, setTransactionData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await get_transaction_data();
            setTransactionData(data);
            setLoading(false);
        };
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                transactionData.map((transaction, index) => (
                    <div key={index}>
                        <p>Wallet Address: {transaction.wallet_address}</p>
                        <p>ETH Sent: {transaction.ETH_sent}</p>
                        <p>ETH Received: {transaction.ETH_received}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default TransactionInfo;
