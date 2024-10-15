export interface Widget {
  id: string;
  name: string;
  description: string;
}

export interface WidgetsResponse {
  widgets: Widget[];
}


export interface Gadget {
  id: string;
  name: string;
  description: string;
}

export interface GadgetsResponse {
    gadgets: Gadget[];
}
