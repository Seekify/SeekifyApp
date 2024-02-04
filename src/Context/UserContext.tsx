import { getCurrentUser, signIn, signOut, signUp } from 'aws-amplify/auth';
import React, { createContext, useState } from 'react';
import axios from 'axios'

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const createUser = (signupData: any, profileData: any) => {
    signUp(signupData)
      .then((currentUser: any) => {
        console.log('User signed up:', currentUser);
        profileData.user_id = currentUser.userId
        createUserProfile(profileData)
      })
      .catch((err: any) => {
        console.log('User is not logged in:', err);
      });
  };

  const grabUser = () => {
    getCurrentUser()
      .then((currentUser: any) => {
        console.log('User is logged in:', currentUser);
        setUser(currentUser)
      })
      .catch((err: any) => {
        console.log('User is not logged in:', err);
      });
  };

  const signInUser = (username: string, password: string) => {
    signIn({username, password})
      .then((response) => {
        console.log(response)
        grabUser()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const signOutUser = () => {
    signOut()
      .then(response => {
        console.log('logged out')
        setUser(null)
      })
      .catch(response => {
        console.log(response)
      })
  }

  const createUserProfile = (profile_data: any) => {
    const url = `${process.env.BASE_URL}profiles/`; 
    axios.post(url, profile_data)
      .then(response => {
        console.log('Profile created successfully:', response.data);
      })
      .catch(error => {
        console.error('Error creating new list:', error)
      });
  }

  const getUserProfile = (user_id: string) => {
    let url = `${process.env.BASE_URL}profiles/${user_id}`
    axios.get(url)
      .then(response => {
        setProfile(response.data)
      })
      .catch(error => {
        console.error('Error fetching places:', error);
        throw error;
      });
  }

  const updateUserProfile = (user_id: string, profileData: any) => {
    let url = `${process.env.BASE_URL}profiles/${user_id}`
    axios.put(url, profileData)
      .then(response => {
        setProfile(response.data)
      })
      .catch(error => {
        console.error('Error fetching places:', error);
        throw error;
      });
  }

  return (
    <UserContext.Provider value={{ user, 
                                   profile,
                                   createUser,
                                   grabUser, 
                                   signOutUser, 
                                   signInUser,
                                   getUserProfile,
                                   updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};