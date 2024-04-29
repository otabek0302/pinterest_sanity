"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { client } from "./sanity";

const fetchUser = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const email = session?.user?.email;

  useEffect(() => {
    const fetchUser = async () => {
      if (email) {
        try {
          const data = await client?.fetch(
            `*[_type == "user" && email == '${email}']`
          );
          if (data === null || data.length === 0) {
            console.log(email);
          } else {
            setUser(data[0]);
          }
        } catch (error) {
          throw new Error(error.message);
        }
      }
    };
    fetchUser();
  }, [email]);

  useEffect(() => {
    if (user) {
      const userData = JSON.stringify(user);

      localStorage.setItem("user", userData);
    }
  }, [user]);

  return user;
};

export default fetchUser;
