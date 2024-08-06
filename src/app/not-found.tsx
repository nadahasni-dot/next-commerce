import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen -mt-24">
      <h2 className="text-2xl font-semibold">
        Ups! Apa yang kamu cari tidak ditemukan
      </h2>
      <Button variant="outline" className="text-green-600 border-green-600 hover:text-green-600">
        <Link href="/">Kembali</Link>
      </Button>
    </div>
  );
};

export default NotFound;
