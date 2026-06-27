"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { products, profile, socials } from "../data/products";

function IconTikTok({ size = 20, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
    </svg>
  );
}
function IconShopee() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" stroke="rgba(238,77,45,0.5)" strokeWidth="2" />
      <path d="M16 10a4 4 0 01-8 0" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconCart() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
function IconPlay() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function BioPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const tiktok = socials.find(s => s.icon === "tiktok");
  const shopee = socials.find(s => s.icon === "shopee");

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes avatarPop {
          0%   { opacity: 0; transform: scale(0.6); }
          70%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(37, 99, 235, 0); }
        }
        .bio-page { opacity: 0; transition: opacity 0.6s ease; }
        .bio-page.show { opacity: 1; }
        .avatar-ring  { animation: avatarPop 0.6s cubic-bezier(.34,1.5,.64,1) both 0.10s; }
        .hero-name    { animation: fadeUp .5s ease both .20s; }
        .hero-handle  { animation: fadeUp .5s ease both .25s; }
        .hero-bio     { animation: fadeUp .5s ease both .30s; }
        .hero-stats   { animation: fadeUp .5s ease both .35s; }
        .cta-button   { animation: fadeUp .5s ease both .40s; }
        .socials      { animation: fadeUp .4s ease both .48s; }
        .divider-row  { animation: fadeUp .4s ease both .55s; }
        
        .product-card { 
          animation: fadeUp .4s ease both; 
          transition: all 0.25s cubic-bezier(.34,1.4,.64,1);
          cursor: pointer;
        }
        .product-card:hover { 
          transform: translateY(-6px); 
          box-shadow: 0 12px 32px rgba(37,99,235,.15);
          border-color: #3b82f6;
        }
        .product-card:active { transform: scale(.97); }
        .product-card:nth-child(1) { animation-delay: .58s; }
        .product-card:nth-child(2) { animation-delay: .63s; }
        .product-card:nth-child(3) { animation-delay: .68s; }
        .product-card:nth-child(4) { animation-delay: .73s; }
        .product-card:nth-child(5) { animation-delay: .78s; }
        
        .product-card .card-img img { 
          transition: transform .4s cubic-bezier(.34,1.4,.64,1); 
        }
        .product-card:hover .card-img img { 
          transform: scale(1.08); 
        }
        
        .slink { 
          transition: all 0.2s cubic-bezier(.34,1.4,.64,1); 
          position: relative;
          overflow: hidden;
        }
        .slink::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .slink:hover::after {
          transform: translateX(100%);
        }
        .slink:hover { 
          transform: translateY(-3px); 
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .slink:active { transform: scale(.97); }
        
        .video-badge { 
          transition: all 0.2s ease;
          backdrop-filter: blur(4px);
        }
        .video-badge:hover { 
          background: rgba(0,0,0,0.85) !important; 
          transform: scale(1.05);
        }
        .video-link { 
          transition: all 0.2s ease;
        }
        .video-link:hover { 
          background: #2563eb !important; 
          color: #fff !important;
          border-color: #2563eb !important;
          transform: scale(1.05);
        }
        .shopee-btn {
          transition: all 0.2s ease;
        }
        .shopee-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(238, 77, 45, 0.3);
        }
        .shopee-btn:active {
          transform: scale(.97);
        }
      `}</style>

      <div className={`bio-page${visible ? " show" : ""}`} style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
        background: "#f8faff",
        minHeight: "100vh",
        maxWidth: 450,
        margin: "0 auto",
        paddingBottom: 60,
        position: "relative",
      }}>

        {/* ── Hero ── */}
        <div style={{
          background: "linear-gradient(145deg,#1a3a8a 0%,#2563eb 50%,#3b82f6 100%)",
          padding: "40px 20px 70px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Background decoration */}
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            background: "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
            pointerEvents: "none" 
          }} />
          <div style={{ 
            position: "absolute", 
            bottom: -30, 
            left: "50%", 
            transform: "translateX(-50%)", 
            width: "130%", 
            height: 70, 
            background: "#f8faff", 
            borderRadius: "50% 50% 0 0/100% 100% 0 0" 
          }} />

          {/* Avatar with pulse ring */}
{/* Avatar - ngoài xoay, trong đứng yên */}
<div className="avatar-ring" style={{ 
  width: 96, 
  height: 96, 
  margin: "0 auto 16px", 
  position: "relative",
}}>
  {/* Ring ngoài xoay */}
  <div style={{
    position: "absolute",
    inset: -6,
    borderRadius: "50%",
    padding: 3,
    background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)",
    animation: "spinSlow 4s linear infinite",
  }}>
    <div style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "transparent",
    }} />
  </div>
  
  {/* Avatar ở giữa đứng yên */}
  <div style={{
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid white",
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    background: "#fff",
    position: "relative",
    zIndex: 1,
    animation: "float 3s ease-in-out infinite",
  }}>
    {profile.avatarUrl ? (
      <Image src={profile.avatarUrl} alt={profile.name} width={96} height={96} style={{ borderRadius: "50%", objectFit: "cover", display: "block" }} />
    ) : (
      <div style={{ 
        width: "100%", 
        height: "100%", 
        borderRadius: "50%", 
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        fontSize: 32, 
        fontWeight: 700, 
        color: "#fff",
        letterSpacing: "2px",
      }}>
        {profile.name.split(" ").map(n => n[0]).join("")}
      </div>
    )}
  </div>
</div>

<style>{`
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
  
  @keyframes pulseDot {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @keyframes pingDot {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.8); opacity: 0; }
  }
`}</style>

          <div className="hero-name" style={{ fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>{profile.name}</div>
          <div className="hero-handle" style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", margin: "2px 0 12px", fontWeight: 500, letterSpacing: "0.3px" }}>{profile.handle}</div>
          <p className="hero-bio" style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", lineHeight: 1.7, maxWidth: 320, margin: "0 auto", fontWeight: 400 }}>{profile.bio}</p>

          {/* Stats - Chân thật nhưng chuyên nghiệp */}
          <div className="hero-stats" style={{ display: "flex", justifyContent: "center", marginTop: 20, gap: 8 }}>
            {[
              ["48", "Followers"],
              ["4", "Videos"],
              ["📦", "Unbox"]
            ].map(([num, label], i) => (
              <div key={i} style={{ 
                textAlign: "center", 
                padding: "6px 18px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                borderRadius: 12,
                border: "0.5px solid rgba(255,255,255,0.1)",
              }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{num}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", marginTop: 1, letterSpacing: "0.5px", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button - Tạo động lực click */}
          <div className="cta-button" style={{ marginTop: 20 }}>
            <div 
              onClick={() => {
                const productSection = document.querySelector('.product-section');
                if (productSection) productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                border: "0.5px solid rgba(255,255,255,0.2)",
                padding: "10px 24px",
                borderRadius: 30,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Xem sản phẩm của tôi
              <IconArrow />
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: "0 16px", marginTop: -10 }}>

          {/* Socials - Thiết kế premium */}
          <div className="socials" style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {tiktok && (
              <Link href={tiktok.href} target="_blank" rel="noopener noreferrer" className="slink" style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 14, 
                padding: "14px 18px", 
                borderRadius: 14, 
                textDecoration: "none", 
                background: "#fff", 
                border: "0.5px solid #eef2f6",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#111", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IconTikTok /></div>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>TikTok</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 1 }}>Xem video unbox của tôi</div>
                </div>
                <div style={{ 
                  width: 28, 
                  height: 28, 
                  borderRadius: "50%", 
                  background: "#f0f2f5", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "#666",
                  fontSize: 14,
                }}>→</div>
              </Link>
            )}
            {shopee && (
              <Link href={shopee.href} target="_blank" rel="noopener noreferrer" className="slink" style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 14, 
                padding: "14px 18px", 
                borderRadius: 14, 
                textDecoration: "none", 
                background: "linear-gradient(135deg, #fff5f0, #fff) !important", 
                border: "0.5px solid #fdd0bc",
                boxShadow: "0 2px 8px rgba(238,77,45,0.06)",
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#ee4d2d", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IconShopee /></div>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#c2410c" }}>Shopee Store</div>
                  <div style={{ fontSize: 11, color: "#f97316", marginTop: 1 }}>Mua sản phẩm được unbox</div>
                </div>
                <div style={{ 
                  width: 28, 
                  height: 28, 
                  borderRadius: "50%", 
                  background: "#fef3ef", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "#ee4d2d",
                  fontSize: 14,
                }}>→</div>
              </Link>
            )}
          </div>

          {/* Divider with badge */}
          <div className="divider-row" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(90deg, transparent, #bfdbfe)" }} />
            <span style={{ 
              fontSize: 10, 
              color: "#1e3a8a", 
              letterSpacing: "1.5px", 
              fontWeight: 700,
              background: "#eff6ff",
              padding: "4px 14px",
              borderRadius: 20,
              border: "0.5px solid #dbeafe",
            }}>
              🔥 SẢN PHẨM NỔI BẬT
            </span>
            <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(270deg, transparent, #bfdbfe)" }} />
          </div>

          {/* Product grid - Premium design */}
          <div className="product-section" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {products.map((p, i) => (
              <Link key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="product-card" style={{ 
                background: "#fff", 
                border: "0.5px solid #e8edf4", 
                borderRadius: 16, 
                overflow: "hidden", 
                textDecoration: "none", 
                display: "flex", 
                flexDirection: "column",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
              }}>
                
                {/* Image - with better overlay */}
                <div className="card-img" style={{ position: "relative", aspectRatio: "1", overflow: "hidden", background: "#f8faff" }}>
                  <img src={p.image} alt={p.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  
                  {/* Tag - premium style */}
                  {/* Tag - nền trắng chữ đen, cực kỳ dễ đọc */}
<span style={{ 
  position: "absolute", 
  top: 8, 
  left: 8, 
  background: "rgba(255,255,255,0.95)",
  backdropFilter: "blur(4px)",
  color: "#1a1a1a", 
  fontSize: 9, 
  fontWeight: 800, 
  padding: "3px 10px", 
  borderRadius: 20,
  boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  border: "0.5px solid rgba(0,0,0,0.05)",
}}>{p.tag}</span>

                  {/* Video badge - premium với gradient */}
                  {p.linkVideoPreview && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(p.linkVideoPreview, '_blank');
                      }}
                      className="video-badge"
                      style={{
                        position: "absolute", 
                        bottom: 8, 
                        right: 8,
                        display: "flex", 
                        alignItems: "center", 
                        gap: 5,
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(8px)",
                        color: "#fff",
                        fontSize: 9, 
                        fontWeight: 600,
                        padding: "5px 10px", 
                        borderRadius: 20,
                        textDecoration: "none",
                        cursor: "pointer",
                        border: "0.5px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <IconTikTok size={12} />
                      Xem video
                    </div>
                  )}
                </div>

                {/* Info - cải thiện spacing */}
                <div style={{ padding: "12px 12px 14px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  <p style={{ 
                    fontSize: 11, 
                    color: "#1e293b", 
                    fontWeight: 600, 
                    lineHeight: 1.5, 
                    margin: 0, 
                    display: "-webkit-box", 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: "vertical", 
                    overflow: "hidden",
                    minHeight: 32,
                  } as React.CSSProperties}>
                    {p.name}
                  </p>

                  {/* Action buttons - premium */}
                  {p.linkVideoPreview ? (
                    <div style={{ display: "flex", gap: 6, marginTop: "auto" }}>
                      <div className="shopee-btn" style={{ 
                        flex: 1, 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        gap: 5, 
                        background: "linear-gradient(135deg, #ee4d2d, #e63e1e)", 
                        color: "#fff", 
                        borderRadius: 10, 
                        padding: "8px 6px", 
                        fontSize: 10, 
                        fontWeight: 700,
                        cursor: "pointer",
                        border: "none",
                        boxShadow: "0 2px 8px rgba(238,77,45,0.2)",
                      }}>
                        <IconCart /> Mua ngay
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(p.linkVideoPreview, '_blank');
                        }}
                        className="video-link"
                        style={{ 
                          width: 34, 
                          flexShrink: 0, 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          background: "#f1f5f9", 
                          color: "#334155", 
                          borderRadius: 10, 
                          border: "0.5px solid #e2e8f0", 
                          textDecoration: "none", 
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        title="Xem video TikTok"
                      >
                        <IconPlay />
                      </div>
                    </div>
                  ) : (
                    <div className="shopee-btn" style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      gap: 5, 
                      background: "linear-gradient(135deg, #ee4d2d, #e63e1e)", 
                      color: "#fff", 
                      borderRadius: 10, 
                      padding: "8px 6px", 
                      fontSize: 10, 
                      fontWeight: 700, 
                      marginTop: "auto",
                      cursor: "pointer",
                      border: "none",
                      boxShadow: "0 2px 8px rgba(238,77,45,0.2)",
                    }}>
                      <IconCart /> Mua ngay
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          
          {/* Trust badge - tạo thêm uy tín */}
          <div style={{ 
            marginTop: 28, 
            textAlign: "center",
            padding: "14px 20px",
            background: "linear-gradient(135deg, #eff6ff, #f8faff)",
            borderRadius: 12,
            border: "0.5px solid #dbeafe",
          }}>
            <div style={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              gap: 16,
              flexWrap: "wrap",
            }}>
              <span style={{ fontSize: 11, color: "#475569", fontWeight: 500 }}>📦 Unbox thật - Trải nghiệm thật</span>
              <span style={{ fontSize: 11, color: "#475569", fontWeight: 500 }}>⭐ 100% sản phẩm review chân thật</span>
              <span style={{ fontSize: 11, color: "#475569", fontWeight: 500 }}>🎯 Đang cập nhật mỗi ngày</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}