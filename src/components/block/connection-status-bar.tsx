import { useEffect, useState } from "react";

export const ConnectionStatusBar = () => {
  // State untuk menyimpan status koneksi internal aplikasi
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Named handler untuk mengubah status state saat event luar terpicu
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    // 1. SINKRONISASI: Daftarkan pemantau status jaringan ke sistem API Browser
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    console.log("Sistem pemantau jaringan internet aktif.");

    // 2. CLEANUP: Cabut seluruh pemantau saat komponen ini tidak lagi dipakai
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
      console.log("Sistem pemantau jaringan internet dinonaktifkan dari RAM.");
    };
  }, []); // Menggunakan array kosong karena pemantau cukup dipasang 1 kali di awal

  return (
    <div className="p-4 border-b">
      <div className="flex items-center gap-2">
        {/* Menggunakan Short-Circuit & Ternary Operator untuk merubah indikator visual */}
        <span
          className={`w-3 h-3 rounded-full ${isOnline ? "bg-emerald-500" : "bg-rose-500"}`}
        />
        <p className="text-sm font-medium text-zinc-700">
          {isOnline
            ? "Sistem POS Terhubung (Online)"
            : "Koneksi Terputus (Offline)"}
        </p>
      </div>
    </div>
  );
};
