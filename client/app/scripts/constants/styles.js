import { GRAPH_VIEW_MODE, RESOURCE_VIEW_MODE } from './naming';


export const DETAILS_PANEL_WIDTH = 420;
export const DETAILS_PANEL_OFFSET = 8;
export const DETAILS_PANEL_MARGINS = {
  top: 24,
  bottom: 48,
  right: 36
};

// Resource view
export const RESOURCES_LAYER_TITLE_WIDTH = 200;
export const RESOURCES_LAYER_HEIGHT = 150;
export const RESOURCES_LAYER_PADDING = 10;
export const RESOURCES_LABEL_MIN_SIZE = 50;
export const RESOURCES_LABEL_PADDING = 10;

// Node shapes
export const UNIT_CLOUD_PATH = 'M-1.25 0.233Q-1.25 0.44-1.104 0.587-0.957 0.733-0.75 0.733H0.667Q'
  + '0.908 0.733 1.079 0.562 1.25 0.391 1.25 0.15 1.25-0.022 1.158-0.164 1.065-0.307 0.914-0.377q'
  + '0.003-0.036 0.003-0.056 0-0.276-0.196-0.472-0.195-0.195-0.471-0.195-0.206 0-0.373 0.115-0.167'
  + ' 0.115-0.244 0.299-0.091-0.081-0.216-0.081-0.138 0-0.236 0.098-0.098 0.098-0.098 0.236 0 0.098'
  + ' 0.054 0.179-0.168 0.039-0.278 0.175-0.109 0.136-0.109 0.312z';

// Node Cylinder shape
export const UNIT_CYLINDER_PATH = 'm -1 -1.25' // this line is responsible for adjusting place of the shape with respect to dot
  + 'a 1 0.4 0 0 0 2 0'
  + 'm -2 0'
  + 'v 1.8'
  + 'a 1 0.4 0 0 0 2 0'
  + 'v -1.8'
  + 'a 1 0.4 0 0 0 -2 0';

// Node Storage Sheet Shape
export const SHEET = 'm -1.2 -1.6 m 0.4 0 v 2.4 m -0.4 -2.4 v 2.4 h 2 v -2.4 z m 0 0.4 h 2';

// Node Pool shape
export const POOL = 'M-0.7973230450553865,-0.9595695704742895 h1.6001461457538446 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 0.1600146145753847,0.16007718258067458 v1.6007718258067438 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 -0.1600146145753847,0.16007718258067458 h-1.6001461457538446 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 -0.1600146145753847,-0.16007718258067458 v-1.6007718258067438 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 zv-0.08003859129033725 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 h1.6001461457538446 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 0.1600146145753847,0.16007718258067458 v1.7608490083874186 a0.08000730728769236,'
 + '0.08003859129033725 0 0 1 -0.08000730728769236,0.08003859129033725 h-0.08000730728769236 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 -0.1600146145753847,0.16007718258067458 h-1.6001461457538446 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 -0.1600146145753847,-0.16007718258067458 v-1.6007718258067438 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 zv-0.08003859129033725 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 v-0.04001929564516875 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 0.1600146145753847,-0.16007718258067458 h1.6001461457538446 a0.1600146145753847,'
 + '0.16007718258067458 0 0 1 0.1600146145753847,0.16007718258067458 v1.7608490083874186 a0.08000730728769236,'
 + '0.08003859129033725 0 0 1 -0.08000730728769236,0.08003859129033725 h-0.08000730728769236';

// Node Snapshot shape
export const UNIT_SNAPSHOT_PATH = 'm -1 -1.25a 1 0.4 0 0 0 2 0m -2 0v 1.8a 1 0.4 0 0 0 2 0v -1.8a 1 0.4 0 0 0 -2 0'
  + 'M0.5225068185734066,-0.48122071284524137 L0.2895584517400993,-0.48122071284524137 L0.2895584517400993,-0.5800000088287408'
  + 'L-0.2928119891920457,-0.5800000088287408 L-0.2928119891920457,-0.48122071284524137 L-0.5257603560253497,-0.48122071284524137'
  + 'C-0.5943404024552686,-0.48122071284524137 -0.6499996119767508,-0.42221654805573317 -0.6499996119767508,-0.3495148167886433'
  + 'L-0.6499996119767508,0.33370910931337083 C-0.6499996119767508,0.4064108405804623 -0.5943404024552686,0.4654150053699697'
  + '-0.5257603560253497,0.4654150053699697 L0.5225068185734066,0.4654150053699697 C0.591086865003323,0.4654150053699697'
  + '0.6467460745248119,0.4064108405804623 0.6467460745248119,0.33370910931337083 L0.6467460745248119,-0.3495148167886433'
  + 'C0.6467460745248119,-0.42221654805573317 0.591086865003323,-0.48122071284524137 0.5225068185734066,-0.48122071284524137'
  + 'zM-0.0016579566246104406,0.39126460454682344 C-0.20926127526366578,0.39126460454682344 -0.3781025593285303,0.2122104592794294'
  + '-0.3781025593285303,-0.007869826290395399 C-0.3781025593285303,-0.22795061609605943 -0.20926127526366578,-0.4070703120221034'
  + '-0.0016579566246104406,-0.4070703120221034 S0.37491092152275063,-0.22795061609605943 0.37491092152275063,-0.007869826290395399'
  + 'C0.37491092152275063,0.2122104592794294 0.20588346236829141,0.39126460454682344 -0.0016579566246104406,0.39126460454682344 z';

// NOTE: This value represents the node unit radius (in pixels). Since zooming is
// controlled at the top level now, this renormalization would be obsolete (i.e.
// value 1 could be used instead), if it wasn't for the following factors:
//   1. `dagre` library only works with integer coordinates,
//      so >> 1 value is used to increase layout precision.
//   2. Fonts don't behave nicely (especially on Firefox) if they
//      are given on a small unit scale as foreign objects in SVG.
export const NODE_BASE_SIZE = 100;

// This value represents the upper bound on the number of control points along the graph edge
// curve. Any integer value >= 6 should result in valid edges, but generally the greater this
// value is, the nicer the edge bundling will be. On the other hand, big values would result
// in slower rendering of the graph.
export const EDGE_WAYPOINTS_CAP = 10;

export const CANVAS_MARGINS = {
  [GRAPH_VIEW_MODE]: {
    top: 220, left: 80, right: 80, bottom: 150
  },
  [RESOURCE_VIEW_MODE]: {
    top: 200, left: 210, right: 40, bottom: 150
  },
};

// Node details table constants
export const NODE_DETAILS_TABLE_CW = {
  XS: '32px',
  // 6 chars wide with our current font choices, (pids can be 6, ports only 5).
  S: '56px',
  M: '70px',
  L: '85px',
  XL: '120px',
  XXL: '140px',
  XXXL: '170px',
};

export const NODE_DETAILS_TABLE_COLUMN_WIDTHS = {
  count: NODE_DETAILS_TABLE_CW.XS,
  container: NODE_DETAILS_TABLE_CW.XS,
  docker_container_created: NODE_DETAILS_TABLE_CW.XXXL,
  docker_container_restart_count: NODE_DETAILS_TABLE_CW.M,
  docker_container_state_human: NODE_DETAILS_TABLE_CW.XXXL,
  docker_container_uptime: NODE_DETAILS_TABLE_CW.L,
  docker_cpu_total_usage: NODE_DETAILS_TABLE_CW.M,
  docker_memory_usage: NODE_DETAILS_TABLE_CW.M,
  open_files_count: NODE_DETAILS_TABLE_CW.M,
  pid: NODE_DETAILS_TABLE_CW.S,
  port: NODE_DETAILS_TABLE_CW.S,
  ppid: NODE_DETAILS_TABLE_CW.M, // Label "Parent PID" needs more space
  process_cpu_usage_percent: NODE_DETAILS_TABLE_CW.M,
  process_memory_usage_bytes: NODE_DETAILS_TABLE_CW.M,
  threads: NODE_DETAILS_TABLE_CW.M,

  // e.g. details panel > pods
  kubernetes_ip: NODE_DETAILS_TABLE_CW.XL,
  kubernetes_state: NODE_DETAILS_TABLE_CW.M,

  // weave connections
  weave_connection_connection: NODE_DETAILS_TABLE_CW.XXL,
  weave_connection_state: NODE_DETAILS_TABLE_CW.L,
  weave_connection_info: NODE_DETAILS_TABLE_CW.XL,
};

export const NODE_DETAILS_TABLE_XS_LABEL = {
  count: '#',
  // TODO: consider changing the name of this field on the BE
  container: '#',
};
