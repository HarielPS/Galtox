'use client'
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function CalendarioHistorial() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center" style={{ width: "100%", padding: "0" }}>
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>

    )
}