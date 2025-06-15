'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';
import fcdiLogo from "../../assets/fdic.svg"

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="">
      <Header />
      <div className="flex px-4 gap-1 mt-4">
        <Image src={fcdiLogo} width={230} height={28} className="w-[50px] h-[20px]" alt="logo" />
        <span className="text-sm text-[#1E1F20] italic text-left">FDIC-Insured - Backed by the full faith and credit of the U.S. Government</span>
      </div>
      <div className="px-6 p-4">
        <div className="bg-[#ffffff] mx-auto rounded-xl w-full py-7">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-[30px]">
              <div className="flex relative flex-col gap-2">
                <label htmlFor="Username" className="text-[#1E1F20] bg-[#ffffff] text-[16px]">
                  Username
                </label>
                <input type="text" value={username} className="px-0 pt-0 pb-1 text-[#1E1F20] bg-transparent border-b border-gray-300 outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex relative flex-col gap-3">
                <label htmlFor="Username" className="text-[#1E1F20] bg-[#ffffff] text-[16px]">
                  Password
                </label>
                <input type="password" value={password} className="px-0 pt-0 pb-1 text-[#1E1F20] bg-transparent border-b border-gray-300 outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-3">
                <button type="submit" className="p-4 py-3 bg-[#444444] rounded w-full text-white font-semibold">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] text-sm text-[#1E1F20] text-center flex flex-col gap-3 items-center absolute bottom-0 z-50 bg-[#ffffff] px-6 p-[20px]">
        <p>©2025 Woodforest National Bank</p>
        <p>Member FDIC | Equal Housing Lender</p>
        <Image src="https://i.imgur.com/pty7j0s.png" width={230} height={28} className="w-[50px] h-[20px]" alt="logo" />
      </div>
    </div>
  );
}
