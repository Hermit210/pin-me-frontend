import React, { useContext } from 'react';
import { WalletContext } from '@/context/WalletContext';
import { Button } from './ui/button';
import { Wallet } from 'lucide-react';

const WalletConnectButton = () => {
    const { walletAddress, connectWallet, disconnectWallet } = useContext(WalletContext);

    const formatAddress = (address) => {
        if (!address) return '';
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <>
            {walletAddress ? (
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-500/10 border-green-500 text-green-500 hover:bg-green-500/20"
                    >
                        <Wallet className="w-4 h-4 mr-2" />
                        {formatAddress(walletAddress)}
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={disconnectWallet}
                        className="text-red-400 hover:text-red-300"
                    >
                        Disconnect
                    </Button>
                </div>
            ) : (
                <Button
                    onClick={connectWallet}
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
                >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                </Button>
            )}
        </>
    );
};

export default WalletConnectButton;
