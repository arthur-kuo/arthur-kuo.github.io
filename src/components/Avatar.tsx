import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./ui/avatar"
  
  export default function AvatarDemo({profileImage}) {
    return (
      <Avatar>
        <AvatarImage src={profileImage} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  