import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";


const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({
  publicKey,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint,
});

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
