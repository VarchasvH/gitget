"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
interface UserData {
  name: string;
  login: string;
  avatar_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  // Add any other properties you need from the GitHub API response
}

type UserRepos = Repository[];

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Profile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userRepos, setUserRepos] = useState<UserRepos | null>(null);
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `Joined ${month} ${day}, ${year}`;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserData(response.data); // Save user data to state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setUserRepos(response.data);
      } catch (error) {}
    };

    fetchUserData();
    fetchRepos(); // Call the function to fetch data
  }, [username]); // Re-run effect when username changes
  return (
    <>
      {userData ? (
        <div className='bg-slate-800 flex flex-col justify-center items-center min-h-screen'>
          <Avatar className=' border-8 rounded-full border-[#9fa8da] mt-28'>
            <AvatarImage src={userData?.avatar_url} alt='Profile Picture' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className='text-5xl text-[#d5d9ed] p-4'>{userData?.name}</h1>
          <Link
            href={`https://github.com/${userData?.login}`}
            className='text-3xl font-mono text-[#9fa8da]'
          >
            @{userData?.login}
          </Link>
          <div className=' flex p-4 text-md text-[#c6cff9] mb-4 gap-2'>
            <Image
              src='https://img.icons8.com/dusk/64/calendar--v1.png'
              alt='Calendar'
              width={20}
              height={20}
            ></Image>
            {formatDate(userData.created_at)}
          </div>

          <div className='flex gap-4'>
            <div className='flex flex-col p-5 pt-6 bg-slate-700 rounded-md md:min-w-40'>
              <p className='text-3xl text-[#d5d9ed] text-center'>
                {userData?.public_repos}
              </p>
              <p className='text-[#9fa8da] text-sm mt-3 text-center'>
                REPOSITORIES
              </p>
            </div>
            <div className='flex flex-col p-6 bg-slate-700 rounded-md md:min-w-40'>
              <p className='text-3xl text-[#d5d9ed] text-center'>
                {userData?.followers}
              </p>
              <p className='text-[#9fa8da] text-sm mt-3 text-center'>
                FOLLOWERS
              </p>
            </div>
            <div className='flex flex-col p-6 bg-slate-700 rounded-md md:min-w-40'>
              <p className='text-3xl text-[#d5d9ed] text-center '>
                {userData?.following}
              </p>
              <p className='text-[#9fa8da] text-sm mt-3 text-center'>
                FOLLOWING
              </p>
            </div>
          </div>
          {userRepos && userRepos.length > 0 && (
            <div className='grid md:grid-cols-3 grid-row-1 gap-5 m-10'>
              {userRepos?.slice(0, 6).map((repo: any) => (
                <Link href={repo.html_url} key='repo.id'>
                  <Card className='w-[350px] md:min-h-[230px] min-h-[200px] bg-[#d5d9ed] shadow-xl'>
                    <CardHeader>
                      <CardTitle className='text-2xl font-mono'>
                        {repo.name}
                      </CardTitle>
                      <CardDescription className='p-2 text-slate-800 font-mono font-medium'>
                        {repo.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div>
                        {repo.language ? (
                          <span className='text-[#4763ff]'>
                            {repo.language}
                          </span>
                        ) : (
                          <span className='text-[#4763ff]'>Other</span>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <footer className='bg-slate-900 lg:text-left'>
        <div className='text-[#9fa8da] p-4 text-center text-surface dark:text-white text-2xl font-mono font-extrabold'>
          Made By{" "}
          <Link
            href='https://github.com/VarchasvH'
            className='hover:text-[#8595ee]'
          >
            VarchasvH
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Profile;
