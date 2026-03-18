import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await fetch(
    "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "#aa99ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "JetBrains Mono",
          fontSize: 15,
          fontWeight: 300,
          color: "rgba(255,255,255,0.9)",
          letterSpacing: "0.05em",
          paddingTop: 1,
        }}
      >
        K
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "JetBrains Mono", data: font, weight: 300 }],
    }
  );
}
