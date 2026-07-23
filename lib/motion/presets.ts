import { animationDurations, animationEasings } from "@/constants";

import type { MotionPreset } from "./types";

export const motionPresets = {
  page: {
    className: "motion-page-enter",
    duration: animationDurations.enter,
    easing: animationEasings.enter,
  },
  hero: {
    className: "motion-hero-enter",
    duration: animationDurations.enter,
    easing: animationEasings.enter,
  },
  hover: {
    className: "motion-hover-lift",
    duration: animationDurations.fast,
    easing: animationEasings.standard,
  },
  card: {
    className: "motion-card-enter",
    duration: animationDurations.standard,
    easing: animationEasings.enter,
  },
  timeline: {
    className: "motion-timeline-enter",
    duration: animationDurations.deliberate,
    easing: animationEasings.enter,
  },
  worldMap: {
    className: "motion-map-pulse",
    duration: animationDurations.enter,
    easing: animationEasings.standard,
  },
  commandCenter: {
    className: "motion-command-center-enter",
    duration: animationDurations.deliberate,
    easing: animationEasings.enter,
  },
} as const satisfies Record<string, MotionPreset>;

export type MotionPresetName = keyof typeof motionPresets;
