"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

const Home = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleUserSubmit = async () => {
    if (username.trim() !== "") {
      try {
        // Check if the username exists in the GitHub API
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );

        if (response.status === 200) {
          // Username found, redirect to the user page
          router.push(`/user/${username}`);
        } else {
          // Username not found, handle the error
          console.error("User not found");
          router.push("/error");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        router.push("/error");
      }
    }
  };

  const handleInputChange = (e: any) => {
    setUsername(e.target.value);
  };

  return (
    <div className='bg-slate-800 flex flex-col justify-center items-center min-h-screen'>
      <Image
        src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxjaXJjbGUgY3g9IjI4IiBjeT0iMjgiIHI9IjE4IiBmaWxsPSIjOWZhOGRhIj48L2NpcmNsZT48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxODE5M2YiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNMzUuMDU0LDM4LjgzNglDMzEuOTcsNDEuMTM3LDI4LjE0NCw0Mi41LDI0LDQyLjVDMTMuNzgzLDQyLjUsNS41LDM0LjIxNyw1LjUsMjRjMC0yLjkxNywwLjY3NS01LjY3NiwxLjg3OC04LjEzIj48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTgxOTNmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTEzLjg2OSw4LjUxOAlDMTYuNzc5LDYuNjEsMjAuMjYsNS41LDI0LDUuNWMxMC4yMTcsMCwxOC41LDguMjgzLDE4LjUsMTguNWMwLDIuOTQxLTAuNjg2LDUuNzIxLTEuOTA3LDguMTkiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTgxOTNmIiBkPSJNMzQsMjNjMC0xLjU3NC0wLjU3Ni0zLjAzOC0xLjU1OC00LjI3NWMwLjQ0Mi0xLjM2OCwwLjkzLTMuNzcxLTAuMjQyLTUuNjQ4CWMtMi4yNTEsMC0zLjczLDEuNTQ1LTQuNDM2LDIuNTE0QzI2LjYwMiwxNS4yMTMsMjUuMzMzLDE1LDI0LDE1cy0yLjYwMiwwLjIxMy0zLjc2NCwwLjU5MWMtMC43MDYtMC45NjktMi4xODQtMi41MTQtNC40MzYtMi41MTQJYy0xLjMyOCwyLjEyNi0wLjUyNiw0LjQ1LTAuMDczLDUuNDNDMTQuNjM4LDE5Ljc4OCwxNCwyMS4zMzQsMTQsMjNjMCwzLjc4LDMuMjgxLDYuOTQsNy42ODYsNy43NzYJYy0xLjMwOSwwLjY3My0yLjI4NywxLjg5Ni0yLjU4NywzLjM4aC0xLjMxNWMtMS4yOTcsMC0xLjgwMS0wLjUyNi0yLjUwMi0xLjQxNWMtMC42OTItMC44ODktMS40MzctMS40ODgtMi4zMzEtMS43MzYJYy0wLjQ4Mi0wLjA1MS0wLjgwNiwwLjMxNi0wLjM4NiwwLjY0MWMxLjQxOSwwLjk2NiwxLjUxNiwyLjU0OCwyLjA4NSwzLjU4M0MxNS4xNjgsMzYuMTYxLDE2LjIyOSwzNywxNy40MjksMzdIMTl2NS45NDJoMTB2LTcuODA2CWMwLTEuOTA4LTEuMDk4LTMuNTQ0LTIuNjg2LTQuMzZDMzAuNzE5LDI5Ljk0LDM0LDI2Ljc4LDM0LDIzeiI+PC9wYXRoPgo8L3N2Zz4='
        alt='Github icon'
        width={200}
        height={200}
      />
      <h1 className='text-5xl font-semibold text-[#9fa8da] p-7'>
        Find Your Profile
      </h1>
      <Input
        type='text'
        className='outline-none border-none bg-slate-700 w-2/6 h-16 px-6 rounded-sm text-center font-mono text-4xl text-[#9fa8da]'
        placeholder='Username'
        value={username}
        onChange={handleInputChange}
      />
      <Button
        type='submit'
        className='m-5 w-44 h-14 text-lg text-[#9fa8da]'
        onClick={handleUserSubmit}
      >
        Search
      </Button>

      <div className='bg-slate-900 lg:text-left  mt-16 text-[#9fa8da] text-center text-surface dark:text-white text-2xl font-mono font-extrabold rounded-xl p-8'>
        Made By{" "}
        <Link
          href='https://github.com/VarchasvH'
          className='hover:text-[#8595ee]'
        >
          VarchasvH
        </Link>
      </div>
    </div>
  );
};

export default Home;
