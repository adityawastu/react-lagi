import React, { useState, useEffect } from "react";

// 1. Ini Child Component (yang punya Lifecycle)
const TimerComponent = () => {
  const [detik, setDetik] = useState(0);

  useEffect(() => {
    console.log("🟢 MOUNTING: Komponen Timer muncul");

    // Membuat interval (Updating tiap detik)
    const intervalId = setInterval(() => {
      setDetik((prev) => {
        console.log("🟡 UPDATING: Detik bertambah");
        return prev + 1;
      });
    }, 1000);

    // Fungsi Cleanup (Unmounting)
    return () => {
      console.log("🔴 UNMOUNTING: Komponen Timer dihapus. Membersihkan interval...");
      clearInterval(intervalId); // Hentikan timer
    };
  }, []); // Array kosong: setup interval hanya sekali di awal

  return (
    <div style={{ padding: 20, border: "2px solid green", margin: 10 }}>
      <h3>Penghitung Waktu: {detik} detik</h3>
    </div>
  );
};

// 2. Ini Parent Component (Untuk mengontrol muncul/hilangnya Child)
export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <h1>Demo Lifecycle Functional Component</h1>

      <button onClick={() => setShowTimer(!showTimer)}>{showTimer ? "Hapus Komponen" : "Munculkan Komponen"}</button>

      {/* Komponen Timer hanya ada jika showTimer === true */}
      {showTimer && <TimerComponent />}
    </div>
  );
}
