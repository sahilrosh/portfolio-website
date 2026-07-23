"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

function ProjectDemoVideo({ src, title }: { src: string; title: string }) {
  const url = encodeURI(src);
  return (
    <div className="mt-6 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]">
      <video
        className="w-full aspect-video object-contain"
        autoPlay
        muted
        loop
        playsInline
        title={title}
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function ProjectDemoGif({ src, title, label }: { src: string; title: string; label?: string }) {
  const url = encodeURI(src);
  return (
    <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={title}
        className="w-full h-auto object-contain"
      />
      {label && (
        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          {label}
        </div>
      )}
    </div>
  );
}

export function ProjectsTimeline() {
  const data = [
    {
      title: "VR Home",
      content: (
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              VR Home
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">Virtual Reality Project • Unity + Meta Quest</p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-2 mb-6 list-disc list-inside">
              <li>Built an immersive VR home experience with multiple themed rooms — green, blue, and pink — each with unique atmosphere and lighting.</li>
              <li>Designed interactive VR environments optimised for Meta Quest with natural locomotion and room-scale exploration.</li>
              <li>Implemented dynamic room transitions and environmental storytelling using Unity&apos;s XR Interaction Toolkit.</li>
            </ul>

            {/* Demo 1 — main walkthrough at 1.5× speed */}
            <div className="mb-4">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-medium uppercase tracking-wide">Full Walkthrough Demo</p>
              <ProjectDemoGif
                src="/project videos/vr-home/demo1.gif"
                title="VR Home full walkthrough demo"
              />
            </div>


            {/* Room Showcase — 3 rooms in a row */}
            <div className="mb-6">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-medium uppercase tracking-wide">Room Showcase</p>
              <div className="grid grid-cols-3 gap-2">
                <ProjectDemoGif
                  src="/project videos/vr-home/green_room.gif"
                  title="VR Home green room"
                  label="🟢 Green Room"
                />
                <ProjectDemoGif
                  src="/project videos/vr-home/blue_room.gif"
                  title="VR Home blue room"
                  label="🔵 Blue Room"
                />
                <ProjectDemoGif
                  src="/project videos/vr-home/red_room.gif"
                  title="VR Home red room"
                  label="🔴 Red Room"
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Source:</span>{" "}
                <a href="https://github.com/sahilrosh/VR-Home" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/sahilrosh/VR-Home
                </a>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Unity</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Meta Quest</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">OpenXR</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">XR Interaction Toolkit</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">C#</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sushi Menu",
      content: (
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              SushiMenu
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">Augmented Reality Project • Unity + Vuforia</p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-2 mb-4 list-disc list-inside">
              <li>Built an image-target AR sushi menu where 3D food models appear when users scan printed menu markers.</li>
              <li>Integrated Vuforia tracking to anchor content on multiple targets including salmon sushi, veg sushi, and sushi combo.</li>
              <li>Implemented gesture-based interaction for mobile using Lean Touch and configured the project for Android builds.</li>
            </ul>
            <ProjectDemoVideo
              src="/project videos/screen_recording_sushi_menu.mp4"
              title="SushiMenu screen recording"
            />
            <div className="mb-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Source:</span>{" "}
                <a href="https://github.com/sahilrosh/Sushi-Menu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/sahilrosh/Sushi-Menu
                </a>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Unity 6</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Vuforia Engine</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Lean Touch</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">TextMesh Pro</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Android</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "VR Rage Room",
      content: (
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              RageRoom
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
              Virtual Reality Project • Unity + Meta Quest
            </p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-2 mb-6 list-disc list-inside">
              <li>Created a VR destruction sandbox where objects break only when impact force crosses a hard-hit threshold.</li>
              <li>Added debris fade-out effects, impact particles, and haptic feedback to improve immersion on Meta Quest.</li>
              <li>Implemented score tracking and destruction logic with physics-based interactions in Unity.</li>
            </ul>
            <ProjectDemoVideo
              src="/project videos/Screen Recording_rage_room.mp4"
              title="RageRoom screen recording"
            />
            <div className="mb-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Source:</span>{" "}
                <a href="https://github.com/sahilrosh/VR-Rage-Room" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/sahilrosh/VR-Rage-Room
                </a>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Unity 2022 LTS</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">OpenXR</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Meta XR SDK</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">XR Interaction Toolkit</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "POPIT",
      content: (
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              POPIT
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">AR popping game • Unity</p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal space-y-2 mb-4 list-disc list-inside">
              <li>Light AR popping game for a quick mental break—simple targets to clear and reset your focus.</li>
              <li>Crosshair aiming with click-to-shoot input so every tap lines up with what you are looking at.</li>
              <li>Spawn points drive target generation so waves feel varied while staying easy to tune in the scene.</li>
            </ul>
            <ProjectDemoVideo
              src="/project videos/ScreenRecording_popit.mp4"
              title="POPIT screen recording"
            />
            <div className="mb-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">Source:</span>{" "}
                <a href="https://github.com/sahilrosh/POPIT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/sahilrosh/POPIT
                </a>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">Unity</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">C#</span>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-700 dark:text-neutral-300">ShaderLab</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

