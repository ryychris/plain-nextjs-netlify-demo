"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [dbConfigured, setDbConfigured] = useState(true);

  useEffect(() => {
    const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;
    if (!databaseUrl || databaseUrl === "prisma+postgres://accelerate.prisma-data.net/?api_key=API_KEY") {
      setDbConfigured(false);
    }
  }, []);

  return (
    <header>
     
    </header>
  );
}
