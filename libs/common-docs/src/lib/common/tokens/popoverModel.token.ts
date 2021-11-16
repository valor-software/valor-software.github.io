import { InjectionToken } from "@angular/core";
import { PopoverStructure } from "../models/popover.model";

export const POPOVER_STRUCTURE = new InjectionToken<typeof PopoverStructure>('route structure for popover');
