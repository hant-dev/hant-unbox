"use client";

import React from "react";
import { products } from "./data/products";

export default function ProductShowcase() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 24,
      padding: 32,
      background: "#f8fafc"
    }}>
      {products.map((product, idx) => (
        <a
          key={idx}
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            borderRadius: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            background: "#fff",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "transform 0.15s, box-shadow 0.15s",
            cursor: "pointer"
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.14)";
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "none";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
          }}
        >
          <img src={product.image} alt={product.name} style={{ width: 160, height: 160, objectFit: "cover", borderRadius: 12 }} />
          <div style={{ marginTop: 16, fontWeight: 600, fontSize: 18, color: "#222" }}>{product.name}</div>
          <div style={{ marginTop: 12 }}>
            <span style={{
              background: "#ee4d2d",
              color: "#fff",
              borderRadius: 8,
              padding: "8px 18px",
              fontWeight: 500,
              fontSize: 15,
              boxShadow: "0 1px 4px rgba(238,77,45,0.12)",
              transition: "background 0.2s"
            }}>
              Mua trên Shopee
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
