export interface GuestbookMsgProps {
  _id: string;
  username: string;
  message: string;
  human: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function GuestbookMessage({ msg }: { msg: GuestbookMsgProps }) {
  console.log(msg);
  return (
    <div className="duration-100 hover:bg-accent flex gap-2 py-2 hover:px-2 items-baseline">
      <span className="text-xs shrink-0 text-muted-foreground">
        {new Date(msg.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </span>
      <span className="text-primary font-bold">{msg.username}</span>
      <p className="text-foreground whitespace-break-spaces text-justify truncate">
        {msg.message}
      </p>
    </div>
  );
}
