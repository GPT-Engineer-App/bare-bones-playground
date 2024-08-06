import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Bare-Bones App</h1>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to Your App</h2>
        <p className="mb-4">This is a basic structure you can build upon.</p>
        <div className="mb-4">
          <p>Count: {count}</p>
          <Button onClick={() => setCount(count + 1)} className="mr-2">Increment</Button>
          <Button onClick={() => setCount(count - 1)} variant="outline">Decrement</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
