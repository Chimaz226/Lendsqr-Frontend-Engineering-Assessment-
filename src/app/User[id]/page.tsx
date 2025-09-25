import React from "react";

interface UserPageProps {
  params: { id: string };
}

export default function UserPage({ params }: UserPageProps) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {params.id}</p>
    </div>
  );
}
