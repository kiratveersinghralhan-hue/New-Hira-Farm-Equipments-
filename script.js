import { enableFirebase, firebaseConfig, enquiriesCollection, usersCollection } from './firebase-config.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const parts = [
  {
    "no": 1,
    "name": "Guide Drum Shaft",
    "cat": "Shafts",
    "qty": "1",
    "text": "Guide drum shaft for feeding/guide drum rotation.",
    "detail": "Supports guide drum rotation. Inspect straightness, bearing seats and keyway before fitting.",
    "pos": [
      42,
      42
    ]
  },
  {
    "no": 2,
    "name": "Handwritten item — confirm",
    "cat": "Shafts",
    "qty": "1",
    "text": "This row is handwritten in the photo and needs confirmation.",
    "detail": "Please confirm exact English part name from the original parts book.",
    "pos": [
      34,
      50
    ]
  },
  {
    "no": 3,
    "name": "Handwritten RED SHAFT item — confirm",
    "cat": "Shafts",
    "qty": "1",
    "text": "A handwritten shaft item is visible but not fully readable.",
    "detail": "Please confirm the exact part name/part number for precise catalogue entry.",
    "pos": [
      41,
      61
    ]
  },
  {
    "no": 4,
    "name": "Bearing 6311",
    "cat": "Bearings",
    "qty": "1",
    "text": "Bearing 6311 for rotating assembly support.",
    "detail": "Replace when heat, noise, play or rough rotation appears. Fit only correct bearing number.",
    "pos": [
      62,
      72
    ]
  },
  {
    "no": 5,
    "name": "Bearing 6208",
    "cat": "Bearings",
    "qty": "1",
    "text": "Bearing 6208 for rotating components.",
    "detail": "Clean housing, press evenly on correct race and grease/fit as per machine requirement.",
    "pos": [
      55,
      31
    ]
  },
  {
    "no": 6,
    "name": "Bearing 6205",
    "cat": "Bearings",
    "qty": "1",
    "text": "Bearing 6205 for light/medium rotating support.",
    "detail": "Inspect shaft and housing before replacement to avoid repeated failure.",
    "pos": [
      62,
      42
    ]
  },
  {
    "no": 7,
    "name": "Bearing T-144",
    "cat": "Bearings",
    "qty": "1",
    "text": "T-144 bearing listed in New Hira spare parts book.",
    "detail": "Use matching bearing specification and confirm fitment location before installation.",
    "pos": [
      69,
      53
    ]
  },
  {
    "no": 8,
    "name": "Bearing 1888180",
    "cat": "Bearings",
    "qty": "1",
    "text": "1888180 bearing listed in parts book.",
    "detail": "Match number exactly and check bearing seat wear before fitment.",
    "pos": [
      76,
      64
    ]
  },
  {
    "no": 9,
    "name": "Bearing UCF 207",
    "cat": "Bearings",
    "qty": "1",
    "text": "UCF 207 bearing unit.",
    "detail": "Align housing, tighten set screws properly and check free rotation.",
    "pos": [
      83,
      75
    ]
  },
  {
    "no": 10,
    "name": "Bearing 206 UC",
    "cat": "Bearings",
    "qty": "1",
    "text": "UC 206 bearing insert.",
    "detail": "Use with compatible housing. Check shaft diameter and locking arrangement.",
    "pos": [
      25,
      34
    ]
  },
  {
    "no": 11,
    "name": "Bearing UCF - 206",
    "cat": "Bearings",
    "qty": "1",
    "text": "UCF 206 bearing unit.",
    "detail": "Replace as complete unit if housing or insert is worn.",
    "pos": [
      32,
      45
    ]
  },
  {
    "no": 12,
    "name": "Thresher Pulley Lock",
    "cat": "Drive",
    "qty": "1",
    "text": "Locking part for thresher pulley assembly.",
    "detail": "Inspect wear and locking security before operating thresher drive.",
    "pos": [
      39,
      56
    ]
  },
  {
    "no": 13,
    "name": "Rubber Seal Size 45-62-10",
    "cat": "Rubber Seals",
    "qty": "1",
    "text": "Rubber oil/dust seal size 45-62-10.",
    "detail": "Fit cleanly without damaging lip; check shaft surface before installing.",
    "pos": [
      46,
      67
    ]
  },
  {
    "no": 14,
    "name": "Rubber Seal Size 40-80-10",
    "cat": "Rubber Seals",
    "qty": "1",
    "text": "Rubber seal size 40-80-10.",
    "detail": "Use correct orientation and avoid dry running during installation.",
    "pos": [
      53,
      78
    ]
  },
  {
    "no": 15,
    "name": "Rubber Seal Size 50-70-10",
    "cat": "Rubber Seals",
    "qty": "1",
    "text": "Rubber seal size 50-70-10.",
    "detail": "Replace when leakage or dust ingress is visible.",
    "pos": [
      60,
      37
    ]
  },
  {
    "no": 16,
    "name": "Rubber Seal Size 55-90-10/13",
    "cat": "Rubber Seals",
    "qty": "1",
    "text": "Rubber seal size 55-90-10/13.",
    "detail": "Confirm exact thickness before replacement.",
    "pos": [
      67,
      48
    ]
  },
  {
    "no": 17,
    "name": "Rubber Seal Size 35-62-10",
    "cat": "Rubber Seals",
    "qty": "1",
    "text": "Rubber seal size 35-62-10.",
    "detail": "Clean seal seat and press evenly.",
    "pos": [
      74,
      59
    ]
  },
  {
    "no": 18,
    "name": "Rubber Seal Size 65-90-13",
    "cat": "Rubber Seals",
    "qty": "1",
    "text": "Rubber seal size 65-90-13.",
    "detail": "Use proper installer to prevent bent seal body.",
    "pos": [
      81,
      70
    ]
  },
  {
    "no": 19,
    "name": "Rubber Bush Large",
    "cat": "Rubber Bushes & Kits",
    "qty": "2",
    "text": "Large rubber bush for vibration/support locations.",
    "detail": "Replace cracked or loose bushes; lubricate lightly if recommended.",
    "pos": [
      23,
      29
    ]
  },
  {
    "no": 20,
    "name": "Steering Jack Kit",
    "cat": "Rubber Bushes & Kits",
    "qty": "1",
    "text": "Kit for steering jack service.",
    "detail": "Depressurize hydraulics before opening steering jack assembly.",
    "pos": [
      30,
      40
    ]
  },
  {
    "no": 21,
    "name": "High Low Jack Kit",
    "cat": "Rubber Bushes & Kits",
    "qty": "1",
    "text": "High-low jack service kit.",
    "detail": "Inspect seals and rod surface before reassembly.",
    "pos": [
      37,
      51
    ]
  },
  {
    "no": 22,
    "name": "Distributor / Control Valve Kit",
    "cat": "Rubber Bushes & Kits",
    "qty": "1",
    "text": "Hydraulic distributor/control valve kit.",
    "detail": "Keep all ports clean; replace seals in correct order.",
    "pos": [
      44,
      62
    ]
  },
  {
    "no": 23,
    "name": "Hydraulic Pipe for Steering Jack 24\"",
    "cat": "Hydraulic",
    "qty": "1",
    "text": "24 inch hydraulic pipe for steering jack.",
    "detail": "Check pressure rating and route away from sharp edges.",
    "pos": [
      51,
      73
    ]
  },
  {
    "no": 24,
    "name": "Plastic Bush 35 mm Collar",
    "cat": "Bushes",
    "qty": "1",
    "text": "Plastic bush / collar, approximately 35 mm.",
    "detail": "Confirm exact size and fit without forcing.",
    "pos": [
      58,
      32
    ]
  },
  {
    "no": 25,
    "name": "Axle Couplings",
    "cat": "Other Items",
    "qty": "1",
    "text": "Coupling for axle connection.",
    "detail": "Inspect keyway/splines and tighten locking hardware securely.",
    "pos": [
      65,
      43
    ]
  },
  {
    "no": 26,
    "name": "Small Axle",
    "cat": "Other Items",
    "qty": "1",
    "text": "Small axle part.",
    "detail": "Check straightness, bearing surface and locking arrangement.",
    "pos": [
      72,
      54
    ]
  },
  {
    "no": 27,
    "name": "Large Axle",
    "cat": "Other Items",
    "qty": "1",
    "text": "Large axle part.",
    "detail": "Use lifting support and proper alignment during replacement.",
    "pos": [
      79,
      65
    ]
  },
  {
    "no": 28,
    "name": "External Lock M-42",
    "cat": "Other Items",
    "qty": "5",
    "text": "M-42 external lock.",
    "detail": "Use correct lock size and replace if distorted.",
    "pos": [
      21,
      76
    ]
  },
  {
    "no": 29,
    "name": "Crank Gutke (Wooden)",
    "cat": "Other Items",
    "qty": "2",
    "text": "Wooden crank gutka / block.",
    "detail": "Confirm fitment position before installation.",
    "pos": [
      28,
      35
    ]
  },
  {
    "no": 30,
    "name": "Main Housing Puller",
    "cat": "Tools / Service",
    "qty": "1",
    "text": "Puller for main housing service.",
    "detail": "Use evenly to avoid housing damage.",
    "pos": [
      35,
      46
    ]
  },
  {
    "no": 31,
    "name": "Main Housing Puller Rod with Nut",
    "cat": "Tools / Service",
    "qty": "3",
    "text": "Puller rod with nut for main housing puller.",
    "detail": "Inspect threads and use equal tension.",
    "pos": [
      42,
      57
    ]
  },
  {
    "no": 32,
    "name": "Small Adapter of Hydraulic Pipe 18x18",
    "cat": "Hydraulic",
    "qty": "1",
    "text": "Small hydraulic pipe adapter 18x18.",
    "detail": "Use correct thread and sealing method.",
    "pos": [
      49,
      68
    ]
  },
  {
    "no": 33,
    "name": "Round Plastic Chain Tensioner",
    "cat": "Chain / Elevator",
    "qty": "1",
    "text": "Plastic chain tensioner.",
    "detail": "Adjust chain slack after fitting.",
    "pos": [
      56,
      79
    ]
  },
  {
    "no": 34,
    "name": "Elevator Chain Lock",
    "cat": "Chain / Elevator",
    "qty": "2",
    "text": "Lock for elevator chain.",
    "detail": "Install clip/lock in correct direction of chain travel.",
    "pos": [
      63,
      38
    ]
  },
  {
    "no": 35,
    "name": "Heavy Chain Lock Half/Full",
    "cat": "Chain / Elevator",
    "qty": "2",
    "text": "Heavy chain lock half/full.",
    "detail": "Use correct chain pitch and check after first run.",
    "pos": [
      70,
      49
    ]
  },
  {
    "no": 36,
    "name": "Elevator Sacropt 7 x 35",
    "cat": "Chain / Elevator",
    "qty": "1",
    "text": "Elevator component size 7 x 35 from parts list.",
    "detail": "Confirm spelling/specification from original book before final catalog.",
    "pos": [
      77,
      60
    ]
  },
  {
    "no": 37,
    "name": "Large / Bracketies",
    "cat": "Brackets",
    "qty": "2",
    "text": "Large brackets listed in parts book.",
    "detail": "Check hole alignment and weld/plate condition.",
    "pos": [
      84,
      71
    ]
  },
  {
    "no": 38,
    "name": "Thrasher Key",
    "cat": "Keys / Locks",
    "qty": "1",
    "text": "Key for thresher assembly.",
    "detail": "Replace worn key and inspect keyway damage.",
    "pos": [
      26,
      30
    ]
  },
  {
    "no": 39,
    "name": "Guide Drum Key",
    "cat": "Keys / Locks",
    "qty": "1",
    "text": "Key for guide drum shaft/assembly.",
    "detail": "Ensure tight fit with no play before operation.",
    "pos": [
      33,
      41
    ]
  },
  {
    "no": 40,
    "name": "Elevator Pad 6\"",
    "cat": "Chain / Elevator",
    "qty": "5",
    "text": "6 inch elevator pad.",
    "detail": "Install evenly and inspect chain tension.",
    "pos": [
      40,
      52
    ]
  },
  {
    "no": 41,
    "name": "Feeding Chain Lock Half/Full",
    "cat": "Chain / Elevator",
    "qty": "2",
    "text": "Feeding chain lock half/full.",
    "detail": "Confirm chain size and direction before fitting.",
    "pos": [
      47,
      63
    ]
  },
  {
    "no": 42,
    "name": "Cutter Bar Fingers",
    "cat": "Cutter Bar",
    "qty": "2",
    "text": "Fingers for cutter bar crop guidance.",
    "detail": "Replace bent/broken fingers and check blade clearance.",
    "pos": [
      20,
      62
    ]
  },
  {
    "no": 43,
    "name": "Blade Strip",
    "cat": "Cutter Bar",
    "qty": "1",
    "text": "Blade strip for cutter bar.",
    "detail": "Keep strip straight and tighten fasteners evenly.",
    "pos": [
      22,
      66
    ]
  },
  {
    "no": 44,
    "name": "Blades Class",
    "cat": "Cutter Bar",
    "qty": "10",
    "text": "Blade class / blade sections.",
    "detail": "Replace dull or broken blades for clean cutting.",
    "pos": [
      68,
      44
    ]
  },
  {
    "no": 45,
    "name": "Reel Tines",
    "cat": "Cutter Bar",
    "qty": "5",
    "text": "Tines for reel assembly.",
    "detail": "Align with reel and check rotation clearance.",
    "pos": [
      75,
      55
    ]
  },
  {
    "no": 46,
    "name": "Frog Killi",
    "cat": "Cutter Bar",
    "qty": "1",
    "text": "Frog killi listed in cutter bar section.",
    "detail": "Confirm exact local name/fitment before final catalog.",
    "pos": [
      82,
      66
    ]
  },
  {
    "no": 47,
    "name": "Blade Head",
    "cat": "Cutter Bar",
    "qty": "1",
    "text": "Blade head for cutter bar assembly.",
    "detail": "Check fitment with blade strip and bush.",
    "pos": [
      18,
      64
    ]
  },
  {
    "no": 48,
    "name": "Blade Head Bush",
    "cat": "Cutter Bar",
    "qty": "1",
    "text": "Bush for blade head.",
    "detail": "Replace when play/noise appears at blade head.",
    "pos": [
      31,
      36
    ]
  },
  {
    "no": 49,
    "name": "41 No. Goti Rod",
    "cat": "Cutter Bar",
    "qty": "1",
    "text": "41 No. goti rod.",
    "detail": "Confirm exact rod application before fitting.",
    "pos": [
      38,
      47
    ]
  },
  {
    "no": 50,
    "name": "Reel Bush",
    "cat": "Cutter Bar",
    "qty": "1",
    "text": "Bush for reel assembly.",
    "detail": "Replace worn bush and grease if applicable.",
    "pos": [
      45,
      58
    ]
  },
  {
    "no": 51,
    "name": "Fish Bush",
    "cat": "Cutter Bar",
    "qty": "2",
    "text": "Fish bush listed in parts list.",
    "detail": "Confirm exact location and replace as matched pair when worn.",
    "pos": [
      52,
      69
    ]
  },
  {
    "no": 52,
    "name": "Grain 12th or 19th",
    "cat": "Cutter Bar",
    "qty": "1",
    "text": "Grain part 12th or 19th as printed in list.",
    "detail": "Please confirm exact name/specification for final catalog.",
    "pos": [
      59,
      28
    ]
  },
  {
    "no": 53,
    "name": "Blade Strip Daab",
    "cat": "Cutter Bar",
    "qty": "2",
    "text": "Daab / clamp for blade strip.",
    "detail": "Tighten evenly to hold strip securely.",
    "pos": [
      66,
      39
    ]
  },
  {
    "no": 54,
    "name": "Blade Rivets",
    "cat": "Cutter Bar",
    "qty": "1",
    "text": "Rivets for blade assembly.",
    "detail": "Use correct rivets and secure properly.",
    "pos": [
      73,
      50
    ]
  },
  {
    "no": 55,
    "name": "Tralla Gutka",
    "cat": "Cutter Bar",
    "qty": "2",
    "text": "Tralla gutka listed in parts list.",
    "detail": "Confirm exact location and replace worn block/gutka.",
    "pos": [
      80,
      61
    ]
  },
  {
    "no": 56,
    "name": "D.E. Spanner (Set)",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Double-end spanner set.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 57,
    "name": "Ring Spanner (Set)",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Ring spanner set.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 58,
    "name": "Socket Goti Set with All Size Sockets",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Socket/goti set with all size sockets.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 59,
    "name": "W.P. Piller",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Water pump plier / W.P. piller.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 60,
    "name": "Allen Key (Set)",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Allen key set.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 61,
    "name": "Centre Punch",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Centre punch.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 62,
    "name": "Punch Round 3 mm",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Round punch 3 mm.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 63,
    "name": "Chisel",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Chisel.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 64,
    "name": "Wheel Spanner Layland",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Wheel spanner Leyland/Layland.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 65,
    "name": "Pipe Wrench 18\" Long",
    "cat": "Toolkit",
    "qty": "1",
    "text": "18 inch long pipe wrench.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 66,
    "name": "Bench Vice No.1",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Bench vice No.1.",
    "detail": "Workshop/toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 67,
    "name": "Oil Cane",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Oil can.",
    "detail": "Lubrication toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 68,
    "name": "Circlip Plier Outer 7\"",
    "cat": "Toolkit",
    "qty": "1",
    "text": "7 inch outer circlip plier.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 69,
    "name": "Circlip Plier Inner 7\"",
    "cat": "Toolkit",
    "qty": "1",
    "text": "7 inch inner circlip plier.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 70,
    "name": "Pump L-Key",
    "cat": "Toolkit",
    "qty": "2",
    "text": "Pump L-key.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 71,
    "name": "Hammer 2 lb.",
    "cat": "Toolkit",
    "qty": "1",
    "text": "2 lb hammer.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 72,
    "name": "Hammer 4 lb.",
    "cat": "Toolkit",
    "qty": "1",
    "text": "4 lb hammer.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 73,
    "name": "Three Legs Bearing Puller",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Three-leg bearing puller.",
    "detail": "Use evenly to remove bearings without damaging shaft.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 74,
    "name": "Round File 10\"",
    "cat": "Toolkit",
    "qty": "1",
    "text": "10 inch round file.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 75,
    "name": "Flat File 12\"",
    "cat": "Toolkit",
    "qty": "1",
    "text": "12 inch flat file.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 76,
    "name": "Plier 10\"",
    "cat": "Toolkit",
    "qty": "1",
    "text": "10 inch plier.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 77,
    "name": "Hexa Frame",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Hacksaw/hexa frame.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 78,
    "name": "Hexa Blade",
    "cat": "Toolkit",
    "qty": "2",
    "text": "Hacksaw/hexa blade.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 79,
    "name": "Grease Gun 12\"",
    "cat": "Toolkit",
    "qty": "1",
    "text": "12 inch grease gun.",
    "detail": "Lubrication toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 80,
    "name": "Grease Gun Nipple (Kit)",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Grease gun nipple kit.",
    "detail": "Lubrication toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 81,
    "name": "Grease Pipe 8MM 12\"",
    "cat": "Toolkit",
    "qty": "1",
    "text": "8MM 12 inch grease pipe.",
    "detail": "Lubrication toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 82,
    "name": "Grease Pipe 6MM 12\"",
    "cat": "Toolkit",
    "qty": "1",
    "text": "6MM 12 inch grease pipe.",
    "detail": "Lubrication toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 83,
    "name": "Screw Driver",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Screwdriver.",
    "detail": "General service toolkit item.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 84,
    "name": "Mechanical Jack",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Mechanical jack.",
    "detail": "Use only on firm ground with support stands.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 85,
    "name": "Mechanical Jack Rod",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Mechanical jack rod.",
    "detail": "Use with matching jack.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 86,
    "name": "Nuts Bolts All Sizes",
    "cat": "Hardware",
    "qty": "1",
    "text": "Assorted nuts and bolts.",
    "detail": "Use correct grade/size for machine assemblies.",
    "pos": [
      37,
      38
    ]
  },
  {
    "no": 87,
    "name": "Split Pins All Sizes",
    "cat": "Hardware",
    "qty": "1",
    "text": "Assorted split pins.",
    "detail": "Replace split pins after removal; do not reuse damaged pins.",
    "pos": [
      44,
      49
    ]
  },
  {
    "no": 88,
    "name": "Unclear / blacked-out item — confirm",
    "cat": "Spare Parts",
    "qty": "-",
    "text": "This row is blacked out in the uploaded image.",
    "detail": "Please confirm exact name and quantity from the original book.",
    "pos": [
      51,
      60
    ]
  },
  {
    "no": 89,
    "name": "Thrasher Spikes",
    "cat": "Threshing",
    "qty": "5",
    "text": "Spikes for thresher assembly.",
    "detail": "Replace worn spikes in balanced pattern.",
    "pos": [
      54,
      37
    ]
  },
  {
    "no": 90,
    "name": "Thrasher Drum Paddy/Wheat",
    "cat": "Threshing",
    "qty": "1",
    "text": "Thresher drum for paddy/wheat.",
    "detail": "Check balance, rasp/spike condition and clearances.",
    "pos": [
      53,
      38
    ]
  },
  {
    "no": 91,
    "name": "Concave Assembly Paddy/Wheat",
    "cat": "Threshing",
    "qty": "1",
    "text": "Concave assembly for paddy/wheat.",
    "detail": "Set clearance according to crop and inspect for wear.",
    "pos": [
      52,
      42
    ]
  },
  {
    "no": 92,
    "name": "Cutter Puller",
    "cat": "Tools / Service",
    "qty": "1",
    "text": "Puller for cutter/service assembly.",
    "detail": "Use to remove assembly without hammer damage.",
    "pos": [
      79,
      52
    ]
  },
  {
    "no": 93,
    "name": "Water Cool Cage",
    "cat": "Cooling",
    "qty": "1",
    "text": "Water cool cage.",
    "detail": "Inspect cooling airflow and blockage.",
    "pos": [
      21,
      63
    ]
  },
  {
    "no": 94,
    "name": "Tool Box",
    "cat": "Toolkit",
    "qty": "1",
    "text": "Tool box.",
    "detail": "Storage for service tools.",
    "pos": [
      78,
      80
    ]
  },
  {
    "no": 95,
    "name": "Array Straw Walker Blade",
    "cat": "Straw Walker",
    "qty": "10",
    "text": "Straw walker blade array.",
    "detail": "Inspect for cracks and replace damaged blades.",
    "pos": [
      35,
      33
    ]
  }
];

const state = {
  heroIndex: 0,
  selectedPart: 0,
  firebaseReady: false,
  db: null,
  auth: null,
  user: null,
  firebase: null
};

const els = {
  preloader: $('#preloader'),
  enterSite: $('#enterSite'),
  menu: $('#menu'),
  nav: $('#nav'),
  images: $$('.heroImage'),
  sideLinks: $$('.sideRail a'),
  partCards: $('#partCards'),
  modelCanvas: $('#modelCanvas'),
  modelLabels: $('#modelLabels'),
  partSearch: $('#partSearch'),
  servicePartList: $('#servicePartList'),
  selectedPart: $('#selectedPart'),
  selectedPartInfo: $('#selectedPartInfo'),
  form: $('#enquiryForm'),
  formStatus: $('#formStatus'),
  shareBtn: $('#shareBtn'),
  toTop: $('#toTop'),
  loginOpen: $('#loginOpen'),
  loginDialog: $('#loginDialog'),
  authEmail: $('#authEmail'),
  authPassword: $('#authPassword'),
  loginSubmit: $('#loginSubmit'),
  signupSubmit: $('#signupSubmit'),
  authStatus: $('#authStatus')
};

function safe(fn, label){try{return fn()}catch(e){console.error('New Hira:',label,e)}}

function closePreloader(){
  els.preloader?.classList.add('is-hidden');
  els.preloader?.setAttribute('aria-hidden','true');
}
els.enterSite?.addEventListener('click', closePreloader);
setTimeout(closePreloader, 2600);

function setupMenu(){
  els.menu?.addEventListener('click', () => {
    const open = els.nav.classList.toggle('is-open');
    els.menu.setAttribute('aria-expanded', String(open));
  });
  $$('.nav a').forEach(a=>a.addEventListener('click',()=>els.nav.classList.remove('is-open')));
}

function setupReveal(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, {threshold:.12});
  $$('.reveal').forEach(el=>io.observe(el));
  setTimeout(()=>$$('.reveal').forEach(el=>el.classList.add('is-visible')), 700);
}

function setupHeroCarousel(){
  setInterval(()=>{
    state.heroIndex = (state.heroIndex + 1) % els.images.length;
    els.images.forEach((img,i)=>img.classList.toggle('is-active', i===state.heroIndex));
  }, 4500);
}

function setupTicker(){
  const track = $('.tickerTrack');
  if(!track) return;
  track.innerHTML += track.innerHTML;
}

function renderPartCards(){
  const featuredNames = [
    'Guide Drum Shaft','Bearing 6311','Cutter Bar Fingers','Blade Strip',
    'Thrasher Drum Paddy/Wheat','Concave Assembly Paddy/Wheat',
    'Belt Pulley','Array Straw Walker Blade','D.E. Spanner (Set)','Grease Gun 12"'
  ];
  const featured = featuredNames
    .map(name => parts.find(p => p.name === name))
    .filter(Boolean);

  els.partCards.innerHTML = featured.map((p)=>`
    <button type="button" data-index="${parts.indexOf(p)}">
      <strong>${p.name}</strong>
      <span>${p.cat} • Qty ${p.qty} — ${p.text}</span>
    </button>
  `).join('');

  $$('#partCards button').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelector('#service3d').scrollIntoView({behavior:'smooth'});
    selectPart(Number(btn.dataset.index));
  }));

  renderCatalog();
  $('#catalogSearch')?.addEventListener('input', e => renderCatalog(e.target.value));
}

function renderCatalog(filter=''){
  const q = filter.toLowerCase().trim();
  const shown = parts.filter(p => !q || String(p.no).includes(q) || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.text.toLowerCase().includes(q));
  const body = $('#catalogBody');
  if(!body) return;
  body.innerHTML = shown.map(p => `
    <tr data-index="${parts.indexOf(p)}">
      <td>${p.no}</td>
      <td><strong>${p.name}</strong><small>${p.text}</small></td>
      <td>${p.cat}</td>
      <td>${p.qty}</td>
    </tr>
  `).join('');
  $$('#catalogBody tr').forEach(row => row.addEventListener('click', () => {
    document.querySelector('#service3d').scrollIntoView({behavior:'smooth'});
    selectPart(Number(row.dataset.index));
  }));
}

function renderServiceList(filter=''){
  const q = filter.toLowerCase().trim();
  const shown = parts.filter(p => !q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.text.toLowerCase().includes(q));
  els.servicePartList.innerHTML = shown.map(p=>{
    const i = parts.indexOf(p);
    return `<button type="button" class="${i===state.selectedPart?'active':''}" data-index="${i}"><strong>${p.name}</strong><br><span>${p.cat}</span></button>`;
  }).join('');
  $$('#servicePartList button').forEach(btn=>btn.addEventListener('click',()=>selectPart(Number(btn.dataset.index))));
}

function selectPart(i){
  state.selectedPart = i;
  const p = parts[i];
  els.selectedPart.textContent = p.name;
  els.selectedPartInfo.textContent = p.detail;
  renderServiceList(els.partSearch?.value || '');
  drawModel();
}

function setupServiceSearch(){
  els.partSearch?.addEventListener('input', e=>renderServiceList(e.target.value));
  renderServiceList();
  selectPart(0);
}

function setupModelCanvas(){
  const canvas = els.modelCanvas;
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let dpr = 1, w = 0, h = 0, t = 0;

  function resize(){
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = canvas.clientWidth || 800;
    h = canvas.clientHeight || 520;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    drawModel();
  }
  window.addEventListener('resize', resize);
  resize();

  function wheel(x,y,r,rot){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);
    ctx.fillStyle='#0a0a09';
    ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(246,241,231,.25)';ctx.lineWidth=Math.max(3,r*.12);ctx.stroke();
    for(let i=0;i<8;i++){
      ctx.rotate(Math.PI/4);
      ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(r*.75,0);ctx.stroke();
    }
    ctx.fillStyle='rgba(246,241,231,.18)';
    ctx.beginPath();ctx.arc(0,0,r*.34,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }

  window.drawModel = function draw(){
    if(!ctx) return;
    t += 0.016;
    ctx.clearRect(0,0,w,h);
    const bg = ctx.createRadialGradient(w*.7,h*.16,20,w*.7,h*.16,w*.45);
    bg.addColorStop(0,'rgba(230,199,128,.18)');
    bg.addColorStop(1,'rgba(230,199,128,0)');
    ctx.fillStyle='#0d0d0b';ctx.fillRect(0,0,w,h);
    ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
    ctx.strokeStyle='rgba(246,241,231,.05)';
    for(let i=0;i<14;i++){ctx.beginPath();ctx.moveTo(i*w/13,h*.74);ctx.lineTo(w*.5,h);ctx.stroke();}

    const cx = w*.5, cy = h*.53;
    const s = Math.min(w/780, h/520);
    const pulse = parts[state.selectedPart].pos;

    ctx.save();
    ctx.translate(cx - 230*s, cy - 60*s);
    ctx.scale(s,s);

    const body = ctx.createLinearGradient(0,-70,420,90);
    body.addColorStop(0,'#e9c36a'); body.addColorStop(1,'#9f7c31');
    ctx.fillStyle=body;
    ctx.beginPath();
    ctx.moveTo(30,90);ctx.lineTo(110,-52);ctx.lineTo(330,-54);ctx.lineTo(450,54);ctx.lineTo(420,105);ctx.lineTo(55,105);ctx.closePath();ctx.fill();

    ctx.fillStyle='#d8d2bf';
    ctx.beginPath();ctx.moveTo(96,-54);ctx.lineTo(206,-54);ctx.lineTo(245,24);ctx.lineTo(48,24);ctx.closePath();ctx.fill();
    ctx.fillStyle='rgba(14,16,18,.78)';ctx.fillRect(126,-38,84,46);

    ctx.fillStyle='rgba(246,241,231,.16)';ctx.fillRect(258,-34,92,58);ctx.fillRect(360,10,60,36);
    ctx.strokeStyle='rgba(246,241,231,.38)';ctx.lineWidth=9;
    ctx.beginPath();ctx.moveTo(438,35);ctx.quadraticCurveTo(535,-14,608,62);ctx.stroke();

    ctx.fillStyle='#b8892d';
    ctx.beginPath();ctx.moveTo(-120,70);ctx.lineTo(40,10);ctx.lineTo(94,36);ctx.lineTo(-62,116);ctx.closePath();ctx.fill();
    ctx.fillStyle='rgba(246,241,231,.2)';ctx.fillRect(-132,66,190,16);

    wheel(142,132,64,t); wheel(372,128,44,t);

    // active glowing location
    const px = (pulse[0]/100)*620 - 130;
    const py = (pulse[1]/100)*230 - 55;
    const glow = ctx.createRadialGradient(px,py,4,px,py,52);
    glow.addColorStop(0,'rgba(163,219,79,.92)');
    glow.addColorStop(.35,'rgba(163,219,79,.28)');
    glow.addColorStop(1,'rgba(163,219,79,0)');
    ctx.fillStyle=glow;ctx.beginPath();ctx.arc(px,py,52,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#a3db4f';ctx.beginPath();ctx.arc(px,py,7,0,Math.PI*2);ctx.fill();

    ctx.restore();

    renderModelLabels();
  }

  function renderModelLabels(){
    if(!els.modelLabels) return;
    els.modelLabels.innerHTML = parts.slice(0,6).map((p,i)=>{
      const active = i === state.selectedPart ? 'active' : '';
      return `<span class="modelLabel ${active}" style="left:${p.pos[0]}%;top:${p.pos[1]}%">${p.name}</span>`;
    }).join('');
  }

  setInterval(drawModel, 66);
}

function setupSectionProgress(){
  const sections = $$('.panel-section');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.dataset.sectionId;
        els.sideLinks.forEach(a=>a.classList.toggle('is-active', a.dataset.section===id));
      }
    });
  }, {threshold:.42});
  sections.forEach(s=>io.observe(s));
}

function setupTopButton(){
  const floating = $('#floatingCta');
  const onScroll = () => {
    const show = window.scrollY > Math.min(520, window.innerHeight * 0.45);
    els.toTop?.classList.toggle('is-visible', window.scrollY > 700);
    floating?.classList.toggle('is-visible', show);
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
  els.toTop?.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

async function shareSite(){
  const data = {title:'New Hira', text:'New Hira premium agricultural machinery.', url:location.href};
  try{
    if(navigator.share) await navigator.share(data);
    else{
      await navigator.clipboard.writeText(location.href);
      alert('Website link copied.');
    }
  }catch{}
}
function setupShare(){
  els.shareBtn?.addEventListener('click', shareSite);
}

async function setupFirebase(){
  if(!enableFirebase) return;
  try{
    const [{ initializeApp }, authMod, dbMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js')
    ]);
    const app = initializeApp(firebaseConfig);
    state.auth = authMod.getAuth(app);
    state.db = dbMod.getFirestore(app);
    state.firebase = {...authMod, ...dbMod};
    state.firebaseReady = true;
    authMod.onAuthStateChanged(state.auth, user=>{
      state.user = user;
      if(els.authStatus) els.authStatus.textContent = user ? `Logged in: ${user.email}` : 'Not logged in.';
    });
  }catch(err){
    console.warn(err);
    if(els.authStatus) els.authStatus.textContent = 'Firebase not connected yet.';
  }
}

function setupLogin(){
  els.loginOpen?.addEventListener('click', ()=>els.loginDialog?.showModal?.());
  async function auth(mode){
    if(!state.firebaseReady){
      els.authStatus.textContent = 'Firebase not ready. Enable Authentication in Firebase.';
      return;
    }
    const email = $('#authEmail').value.trim();
    const password = $('#authPassword').value;
    try{
      if(mode==='login') await state.firebase.signInWithEmailAndPassword(state.auth,email,password);
      else{
        const res = await state.firebase.createUserWithEmailAndPassword(state.auth,email,password);
        await state.firebase.setDoc(state.firebase.doc(state.db, usersCollection, res.user.uid), {
          email, createdAt: state.firebase.serverTimestamp()
        }, {merge:true});
      }
      els.authStatus.textContent = mode === 'login' ? 'Logged in successfully.' : 'Account created successfully.';
      setTimeout(()=>els.loginDialog.close(),700);
    }catch(err){
      els.authStatus.textContent = err.message.replace('Firebase: ','');
    }
  }
  $('#loginSubmit')?.addEventListener('click',()=>auth('login'));
  $('#signupSubmit')?.addEventListener('click',()=>auth('signup'));
}

function setupEnquiry(){
  $('#enquiryForm')?.addEventListener('submit', async e=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    data.createdAtClient = new Date().toISOString();
    data.userEmail = state.user?.email || 'Guest';
    data.source = 'luxury advertising website';
    els.formStatus.className = 'formStatus';
    els.formStatus.textContent = 'Submitting enquiry...';
    try{
      if(state.firebaseReady){
        await state.firebase.addDoc(state.firebase.collection(state.db,enquiriesCollection), {
          ...data,
          createdAt: state.firebase.serverTimestamp()
        });
        els.formStatus.classList.add('success');
        els.formStatus.textContent = 'Enquiry submitted. We will contact you soon.';
      }else{
        const arr = JSON.parse(localStorage.getItem('newHiraEnquiries') || '[]');
        arr.push(data);
        localStorage.setItem('newHiraEnquiries', JSON.stringify(arr));
        els.formStatus.classList.add('success');
        els.formStatus.textContent = 'Saved locally for testing. Firebase can store it when connected.';
      }
      e.currentTarget.reset();
      $('#offerInput').value = 'Up to ₹1,00,000 paddy offer';
    }catch(err){
      els.formStatus.classList.add('error');
      els.formStatus.textContent = err.message;
    }
  });
}

function init(){
  safe(setupMenu,'menu');
  safe(setupReveal,'reveal');
  safe(setupHeroCarousel,'hero');
  safe(setupTicker,'ticker');
  safe(renderPartCards,'parts');
  safe(setupServiceSearch,'service search');
  safe(setupModelCanvas,'model canvas');
  safe(setupSectionProgress,'progress');
  safe(setupTopButton,'top');
  safe(setupShare,'share');
  safe(setupLogin,'login');
  safe(setupEnquiry,'enquiry');
  setupFirebase();
}
document.addEventListener('DOMContentLoaded', init);
