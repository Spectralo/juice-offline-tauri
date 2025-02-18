import { useEffect } from "react";
import { WindowControls } from "tauri-controls";
import { platform } from "@tauri-apps/plugin-os";
import { useState } from "react";
import { CardStackIcon } from "@radix-ui/react-icons";
import { Button } from "./components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function WinControls() {
  const [userPlatform, setUserPlatform] = useState("");
  const [styleAddons, setStyleAddons] = useState("");

  useEffect(() => {
    const setUsersPlatform = async () => {
      const platformName = "macos";
      console.warn(platformName);
      if (platformName !== "windows" && platformName !== "macos") {
        setUserPlatform("macos");
      } else if (platformName == "macos") {
        setUserPlatform(platformName);
        setStyleAddons("pt-2 pb-2");
      } else {
        setUserPlatform(platformName);
      }
    };

    setUsersPlatform();
  });

  return (
    <>
      <div
        className={`flex justify-between items-center w-full ${styleAddons}`}
      >
        <div>
          {" "}
          {/* Left side */}
          <WindowControls platform={userPlatform} />
        </div>
        <div>
          {" "}
          {/* Right side */}
          <Button variant="outline" size="sm" style={{ marginRight: 10 }}>
            <CardStackIcon />
          </Button>
        </div>
      </div>
    </>
  );
}

export default WinControls;
