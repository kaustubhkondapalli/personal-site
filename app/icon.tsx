import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: your first initial, so the tab isn't a framework logo. */
export default function Icon() {
  const initial = site.name.trim().charAt(0).toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a18",
          color: "#fdfdfc",
          fontSize: 21,
          fontFamily: "Georgia, serif",
          borderRadius: 6,
        }}
      >
        {initial}
      </div>
    ),
    size,
  );
}
