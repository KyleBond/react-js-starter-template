import React from "react";

import { useAuth, useUser } from "@clerk/clerk-react";

const Welcome = () => {
  const { isLoaded: authIsLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded: userIsLoaded, isSignedIn, user } = useUser();

  if (!authIsLoaded || !userIsLoaded || !user) {
    return null;
  }

  return (
    <div>
      <p>Howdy {user?.firstName} - you're authenticated</p>
    </div>
  );
};

export { Welcome };
