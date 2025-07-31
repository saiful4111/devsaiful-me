// src/components/EmailTemplate.tsx
interface EmailTemplateProps {
  clientName: string;
  email: string;
  description: string;
}

export function EmailTemplate({
  clientName,
  email,
  description,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9fafb",
        padding: "40px 20px",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        maxWidth: "600px",
        margin: "0 auto",
        color: "#111827",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h1 style={{ margin: 0, fontSize: "24px", color: "#0ea5e9" }}>
          🚀 New Contact Message
        </h1>
        <p style={{ margin: "4px 0 0", fontSize: "16px", color: "#4b5563" }}>
          from {clientName}
        </p>
        <p style={{ margin: "4px 0 0", fontSize: "16px", color: "#4b5563" }}>
          Client Email: {email}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#0f172a" }}>📩 Message</h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151" }}>
          {description}
        </p>
      </div>

      <footer
        style={{
          textAlign: "center",
          fontSize: "12px",
          marginTop: "32px",
          color: "#9ca3af",
        }}
      >
        This email was sent from your portfolio website’s contact form. <br />
        Design by <strong>Saiful</strong> • Powered by Resend 🚀
      </footer>
    </div>
  );
}
