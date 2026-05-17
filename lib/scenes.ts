// Prop scenes — SPEC.md §10 (Laptop) and §11 (Phone), assembled literally.
// Coordinates and animation values copied verbatim from the spec. The only
// composition choice: a single typing cursor (§10.3) is kept, not duplicated.

const SVG_OPEN =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 196" shape-rendering="crispEdges" width="100%" role="img"';

/** §10 — M4 leaning over a laptop, terminal typing in the display. */
export const LAPTOP_SCENE = `${SVG_OPEN} aria-label="M4 working at a laptop">
  <title>M4 — Laptop scene</title>
  <desc>M4 in squash posture leaning over a laptop, typing into a terminal.</desc>

  <!-- chão -->
  <rect x="0" y="182" width="260" height="4" fill="#1A1A1A"/>

  <!-- laptop prop (§10.1) -->
  <rect x="60" y="76" width="140" height="56" fill="#555"/>
  <rect x="68" y="82" width="124" height="44" fill="#0C0C0C"/>

  <!-- display terminal (§10.3) -->
  <rect x="74" y="86" width="60" height="4" fill="#444"/>
  <rect x="74" y="92" width="44" height="4" fill="#444"/>
  <rect x="74" y="100" width="5" height="6" fill="#FF3B00"/>
  <rect x="82" y="100" width="0" height="6" fill="#FF3B00" opacity="0.8">
    <animate attributeName="width" values="0;6;12;18;24;30;36;42;48;54;54;54;54;54;54;0" dur="3.2s" repeatCount="indefinite" calcMode="discrete"/>
  </rect>
  <rect x="82" y="100" width="4" height="6" fill="#F0ECE0">
    <animate attributeName="x" values="82;88;94;100;106;112;118;124;130;136;136;136;136;136;136;82" dur="3.2s" repeatCount="indefinite" calcMode="discrete"/>
    <animate attributeName="opacity" values="1;1;1;1;1;1;1;1;1;1;0;1;0;1;0;1" dur="3.2s" repeatCount="indefinite" calcMode="discrete"/>
  </rect>
  <rect x="74" y="110" width="80" height="4" fill="#888" opacity="0">
    <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1" dur="3.2s" repeatCount="indefinite" calcMode="discrete"/>
  </rect>
  <rect x="74" y="116" width="52" height="4" fill="#888" opacity="0">
    <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1" dur="3.2s" repeatCount="indefinite" calcMode="discrete"/>
  </rect>

  <!-- laptop base -->
  <rect x="40" y="130" width="180" height="8" fill="#555"/>
  <rect x="30" y="136" width="200" height="6" fill="#444"/>

  <!-- M4 squash (§10.2) -->
  <g>
    <animateTransform attributeName="transform" type="translate" values="6,4; 8,4; 6,4" dur="1.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    <rect x="80" y="28" width="24" height="52" fill="#FF3B00"/>
    <rect x="156" y="28" width="24" height="52" fill="#FF3B00"/>
    <rect x="80" y="28" width="44" height="12" fill="#FF3B00"/>
    <rect x="136" y="28" width="44" height="12" fill="#FF3B00"/>
    <rect x="104" y="38" width="16" height="16" fill="#FF3B00"/>
    <rect x="140" y="38" width="16" height="16" fill="#FF3B00"/>
    <rect x="118" y="50" width="24" height="12" fill="#FF3B00"/>
    <rect x="84" y="56" width="12" height="12" fill="#1A1410"/>
    <rect x="160" y="56" width="12" height="12" fill="#1A1410"/>
    <rect x="84" y="62" width="12" height="6" fill="#FF3B00"/>
    <rect x="160" y="62" width="12" height="6" fill="#FF3B00"/>
    <rect x="168" y="10" width="8" height="20" fill="#FF3B00"/>
    <rect x="178" y="22" width="8" height="6" fill="#FF3B00"/>
    <rect x="178" y="15" width="8" height="6" fill="#FF3B00" opacity="0.15">
      <animate attributeName="opacity" values="0.15;1;0.15" dur="3.0s" repeatCount="indefinite" begin="0.75s"/>
    </rect>
    <rect x="178" y="8" width="8" height="6" fill="#FF3B00" opacity="0.05">
      <animate attributeName="opacity" values="0.05;1;0" dur="3.0s" repeatCount="indefinite" begin="1.5s"/>
    </rect>
  </g>
  <rect x="80" y="78" width="14" height="16" fill="#CC2E00">
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0; 0,0; 0,0; 0,0; 0,0; 0,0" dur="0.8s" repeatCount="indefinite" calcMode="discrete"/>
  </rect>
  <rect x="164" y="78" width="14" height="16" fill="#CC2E00">
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,0; 0,0; 0,0; 0,-3; 0,0; 0,0; 0,0" dur="0.8s" repeatCount="indefinite" calcMode="discrete"/>
  </rect>
  <rect x="100" y="78" width="14" height="24" fill="#CC2E00"/>
  <rect x="146" y="78" width="14" height="24" fill="#CC2E00"/>
</svg>`;

/** §11 — M4 cradling a phone, a notification sliding in. */
export const PHONE_SCENE = `${SVG_OPEN} aria-label="M4 holding a phone">
  <title>M4 — Phone scene</title>
  <desc>M4 upright with L-shaped paws cradling a phone, reacting to a notification.</desc>

  <!-- chão -->
  <rect x="0" y="182" width="260" height="4" fill="#1A1A1A"/>

  <!-- phone prop (§11.1) -->
  <rect x="112" y="78" width="36" height="72" fill="#666"/>
  <rect x="118" y="86" width="24" height="56" fill="#0C0C0C"/>
  <rect x="126" y="80" width="8" height="4" fill="#555"/>

  <!-- display de notificações (§11.3) -->
  <rect x="118" y="86" width="24" height="7" fill="#111"/>
  <rect x="120" y="88" width="8" height="3" fill="#555"/>
  <rect x="136" y="88" width="4" height="3" fill="#555"/>
  <rect x="118" y="96" width="24" height="14" fill="#1A1A1A"/>
  <rect x="118" y="96" width="3" height="14" fill="#555"/>
  <rect x="123" y="99" width="14" height="3" fill="#555"/>
  <rect x="123" y="104" width="10" height="3" fill="#444"/>
  <g opacity="0">
    <animate attributeName="opacity" values="0;0;0;0;0;0;1;1;1;1;1;0" dur="4s" repeatCount="indefinite" calcMode="discrete"/>
    <animateTransform attributeName="transform" type="translate" values="0,-10; 0,-10; 0,-10; 0,-10; 0,-10; 0,-10; 0,-8; 0,-4; 0,0; 0,0; 0,0; 0,0" dur="4s" repeatCount="indefinite" calcMode="discrete"/>
    <rect x="118" y="112" width="24" height="14" fill="#222"/>
    <rect x="118" y="112" width="3" height="14" fill="#FF3B00"/>
    <rect x="123" y="115" width="16" height="3" fill="#888"/>
    <rect x="123" y="120" width="10" height="3" fill="#666"/>
  </g>

  <!-- M4 ereto (§11.2) -->
  <g>
    <animateTransform attributeName="transform" type="translate" values="0,0; 2,0; 0,0; -2,0; 0,0" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"/>
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,0; 0,0; 0,0; 0,0; 0,0; 0,-3; 0,0; 0,0; 0,0; 0,0; 0,0" dur="4s" repeatCount="indefinite" calcMode="discrete" additive="sum"/>
    <rect x="86" y="30" width="22" height="66" fill="#FF3B00"/>
    <rect x="152" y="30" width="22" height="66" fill="#FF3B00"/>
    <rect x="86" y="30" width="42" height="13" fill="#FF3B00"/>
    <rect x="132" y="30" width="42" height="13" fill="#FF3B00"/>
    <rect x="108" y="42" width="18" height="18" fill="#FF3B00"/>
    <rect x="134" y="42" width="18" height="18" fill="#FF3B00"/>
    <rect x="122" y="56" width="16" height="10" fill="#FF3B00"/>
    <rect x="90" y="62" width="12" height="12" fill="#1A1410"/>
    <rect x="158" y="62" width="12" height="12" fill="#1A1410"/>
    <rect x="90" y="68" width="12" height="6" fill="#FF3B00">
      <animate attributeName="y" values="68;68;68;68;68;68;68;62;62;66;68;68" dur="4s" repeatCount="indefinite" calcMode="discrete"/>
    </rect>
    <rect x="158" y="68" width="12" height="6" fill="#FF3B00">
      <animate attributeName="y" values="68;68;68;68;68;68;68;62;62;66;68;68" dur="4s" repeatCount="indefinite" calcMode="discrete"/>
    </rect>
    <rect x="162" y="12" width="8" height="20" fill="#FF3B00"/>
    <rect x="172" y="24" width="9" height="6" fill="#FF3B00"/>
    <rect x="172" y="17" width="9" height="6" fill="#FF3B00" opacity="0.15">
      <animate attributeName="opacity" values="0.15;1;0.15" dur="1.8s" repeatCount="indefinite" begin="0.45s"/>
    </rect>
    <rect x="172" y="10" width="9" height="6" fill="#FF3B00" opacity="0.05">
      <animate attributeName="opacity" values="0.05;1;0" dur="1.8s" repeatCount="indefinite" begin="0.9s"/>
    </rect>
    <rect x="172" y="3" width="9" height="6" fill="#FF3B00" opacity="0">
      <animate attributeName="opacity" values="0;0;0;0;0;0;0;1;1;0;0;0" dur="4s" repeatCount="indefinite" calcMode="discrete"/>
    </rect>
  </g>
  <rect x="86" y="94" width="14" height="14" fill="#CC2E00"/>
  <rect x="86" y="106" width="28" height="10" fill="#CC2E00"/>
  <rect x="160" y="94" width="14" height="14" fill="#CC2E00"/>
  <rect x="146" y="106" width="28" height="10" fill="#CC2E00"/>
  <rect x="106" y="94" width="14" height="34" fill="#CC2E00"/>
  <rect x="140" y="94" width="14" height="34" fill="#CC2E00"/>
</svg>`;

/** §19.4 — Nocturne ambient decoration: stars + stylized clouds. */
export const NOCTURNE_DECOR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 196" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" aria-hidden="true">
  <rect x="30" y="20" width="2" height="2" fill="#E7EAF0"/>
  <rect x="80" y="35" width="2" height="2" fill="#E7EAF0" opacity="0.8"/>
  <rect x="145" y="15" width="2" height="2" fill="#E7EAF0"/>
  <rect x="210" y="42" width="2" height="2" fill="#E7EAF0" opacity="0.6"/>
  <rect x="240" y="28" width="2" height="2" fill="#E7EAF0"/>
  <rect x="55" y="58" width="2" height="2" fill="#E7EAF0" opacity="0.7"/>
  <rect x="120" y="48" width="2" height="2" fill="#E7EAF0" opacity="0.5"/>
  <rect x="185" y="22" width="2" height="2" fill="#E7EAF0"/>
  <rect x="20" y="60" width="60" height="6" fill="#A8AFBF" opacity="0.4"/>
  <rect x="32" y="66" width="48" height="4" fill="#A8AFBF" opacity="0.35"/>
  <rect x="180" y="80" width="50" height="6" fill="#A8AFBF" opacity="0.4"/>
  <rect x="192" y="86" width="38" height="4" fill="#A8AFBF" opacity="0.3"/>
</svg>`;
