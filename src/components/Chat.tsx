"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useChat } from "ai/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export interface ChatProps {}

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  ////////////
  console.log("CHAT:", messages[messages.length - 1]);
  ///////////
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>UniChat-AmbiIA</CardTitle>
        <CardDescription>Ambiente Integrado de IA</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[520px] w-full pr-4">
          {typeof messages[messages.length - 1]?.content != "string"
            ? "Gera imagem ao lado do chatBox"
            : messages.map((message) => (
                <div
                  key={message.id}
                  className="flex gap-3 text-slate-600 text-sm mt-3"
                >
                  {message.role == "user" && (
                    <Avatar>
                      <AvatarFallback>YP</AvatarFallback>
                      <AvatarImage src="https://github.com/YuriPicanco.png" />
                    </Avatar>
                  )}
                  {message.role == "assistant" && (
                    <Avatar>
                      <AvatarFallback>YP</AvatarFallback>
                      <AvatarImage src="https://github.com/YuriPicanco.png" />
                    </Avatar>
                  )}

                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role == "user" ? "Usuário" : "AmbiIA"}
                    </span>
                    {message.content}
                  </p>
                </div>
              ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="No que posso te ajudar"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit"> &gt;:_</Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default Chat;
