// @ts-check

(() => {
  function createCodesandboxElement() {
    const codesandboxSvg = `
<svg width="16" height="16" viewBox="0 0 222 252" fill="none" xmlns="http://www.w3.org/2000/svg" class="octicon octicon-file-zip mr-3">
<path d="M7.21906 55.4205L104.143 2.63078C109.425 -0.246393 115.823 -0.172544 121.038 2.8258L214.465 56.5439C218.759 59.0125 221.405 63.5875 221.405 68.5401V182.652C221.405 187.615 218.747 192.199 214.438 194.663L117.637 250.034C113.346 252.488 108.072 252.467 103.8 249.979L6.87245 193.515C2.61721 191.036 0 186.483 0 181.558V67.5728C0 62.5058 2.76932 57.8441 7.21906 55.4205Z" fill="#151515"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M110.695 126.451V235.33C112.591 235.33 113.837 234.919 115.539 233.947L202.722 184.128C206.163 182.156 207.567 179.101 207.567 175.133V74.1121C207.567 72.1218 207.148 70.931 206.181 69.2687L113.484 121.645C111.76 122.63 110.695 124.465 110.695 126.451ZM159.13 188.972C159.13 191.739 158.093 193.123 155.67 194.507L126.609 211.113C124.534 212.496 121.766 211.805 121.766 209.037V135.001C121.766 133.021 123.509 130.454 125.225 129.466L191.651 91.4103C193.496 90.3484 195.11 92.0491 195.11 94.178V133.618C195.11 135.662 194.146 137.499 192.342 138.461L162.59 154.375C160.786 155.337 159.13 157.174 159.13 159.219V188.972Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8252 175.131V74.1108C13.8252 70.138 15.9113 66.395 19.3606 64.4238L103.775 16.6811C105.594 15.7173 108.618 15.2973 110.695 15.2973C112.771 15.2973 115.973 15.8114 117.614 16.6811L201.337 64.4238C202.993 65.4026 205.243 67.6571 206.18 69.2674L113.462 121.854C111.738 122.839 110.695 124.711 110.695 126.697V235.329C108.799 235.329 106.861 234.917 105.159 233.945L20.0525 184.819C16.6031 182.847 13.8252 179.104 13.8252 175.131ZM26.2798 94.1766V133.616C26.2798 136.384 26.9718 137.768 29.7395 139.152L58.8003 155.758C61.5679 157.142 62.2599 159.217 62.2599 161.293V188.97C62.2599 191.737 62.9518 193.121 65.7195 194.506L94.7803 211.112C97.5477 212.496 99.6238 211.804 99.6238 209.036V135.001C99.6238 132.924 98.9318 130.848 96.1646 129.465L31.1233 92.1008C29.0475 90.717 26.2798 91.4089 26.2798 94.1766ZM139.756 47.1258L114.154 61.6561C112.079 63.04 109.311 63.04 107.235 61.6561L81.6337 47.1258C79.9485 46.1733 77.7863 46.1781 76.0983 47.1258L44.2699 65.1158C41.5022 66.4997 41.5022 69.2674 44.2699 70.6512L107.926 107.323C109.63 108.298 111.759 108.298 113.462 107.323L177.119 70.6512C179.195 69.2674 179.887 66.4997 177.119 65.1158L145.291 47.1258C143.603 46.1781 141.441 46.1733 139.756 47.1258Z" fill="#F2F2F2"/>
</svg>
`;

    const codeSandboxUrl = `https://codesandbox.io/s/github${window.location.pathname}`;
    const codeSandboxLi = document.createElement("li");
    codeSandboxLi.setAttribute("data-platforms", "windows,mac");
    codeSandboxLi.setAttribute(
      "class",
      "Box-row Box-row--hover-gray p-0 rounded-0 mt-0 js-remove-unless-platform"
    );
    codeSandboxLi.innerHTML = `
   <a class="d-flex flex-items-center color-text-primary text-bold no-underline p-3" href="${codeSandboxUrl}">
   ${codesandboxSvg}
   Open in CodeSandbox
</a>
`;
    return codeSandboxLi;
  }

  function createGithub1sElement() {
    const github1sSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 400 400" data-readmoappenabled="0.1.4" class="octicon octicon-file-zip mr-3">
  <g><path stroke="none" fill="#13227a" d="M35.587 25.574 C 26.887 34.274,22.366 85.319,28.408 106.640 C 29.808 111.581,30.362 115.990,29.639 116.436 C 22.375 120.926,6.586 153.361,2.311 172.577 C -1.702 190.614,-0.380 242.019,4.623 262.483 C 23.337 339.024,75.772 372.234,183.814 375.971 C 333.315 381.142,400.042 329.514,399.989 208.709 C 399.973 171.788,393.448 148.895,375.953 124.378 L 369.021 114.663 371.179 105.378 C 378.038 75.873,372.074 26.678,361.310 23.977 C 349.211 20.940,315.376 33.668,289.736 50.901 L 277.128 59.375 269.292 57.047 C 230.073 45.401,175.046 45.086,133.396 56.269 L 122.262 59.259 109.633 50.951 C 77.787 29.999,43.062 18.098,35.587 25.574 M199.219 174.024 C 215.547 173.970,243.672 173.640,261.719 173.291 C 297.764 172.594,302.347 173.496,314.439 183.671 C 360.164 222.146,353.423 307.996,302.675 333.490 C 257.998 355.934,129.596 354.142,90.730 330.533 C 37.291 298.070,45.173 192.813,102.426 174.343 C 108.963 172.234,114.738 172.025,139.844 172.986 C 156.172 173.611,182.891 174.078,199.219 174.024 M115.787 201.123 C 100.709 208.550,93.908 238.122,102.705 258.007 C 117.257 290.906,150.790 276.028,150.686 236.719 C 150.615 210.124,133.322 192.485,115.787 201.123 M265.858 201.088 C 262.979 202.507,258.887 206.290,256.767 209.495 C 233.925 244.011,263.236 295.935,289.886 268.166 C 314.409 242.614,294.482 186.985,265.858 201.088 M176.563 301.563 C 164.758 313.367,192.597 331.661,210.156 323.639 C 224.183 317.230,229.788 307.913,223.438 301.563 C 219.132 297.257,215.495 297.640,208.594 303.125 C 205.350 305.703,201.482 307.813,200.000 307.813 C 198.518 307.813,194.650 305.703,191.406 303.125 C 184.505 297.640,180.868 297.257,176.563 301.563"/></g>
</svg>`;

    const github1sUrl = `https://github1s.com/${window.location.pathname}`;

    const github1s = `
   <a class="d-flex flex-items-center color-text-primary text-bold no-underline p-3" href="${github1sUrl}">
   ${github1sSvg}
   Open in Github1s
</a>
`;

    const github1sLi = document.createElement("li");
    github1sLi.setAttribute("data-platforms", "windows,mac");
    github1sLi.setAttribute(
      "class",
      "Box-row Box-row--hover-gray p-0 rounded-0 mt-0 js-remove-unless-platform"
    );
    github1sLi.innerHTML = github1s;
    return github1sLi;
  }

  function createStackBlitzElement() {
    const stackBlitzSvg = `<svg width="16" height="16" viewBox="0 0 32 32" class="octicon octicon-file-zip mr-3"><path fill="#1389FD" d="M5.853 18.647h8.735L9.45 31l16.697-17.647h-8.735L22.55 1 5.853 18.647z"></path></svg>`;

    const stackBlitzUrl = `https://stackblitz.com/github${window.location.pathname}`;

    const linkElement = `
   <a class="d-flex flex-items-center color-text-primary text-bold no-underline p-3" href="${stackBlitzUrl}">
   ${stackBlitzSvg}
   Open in StackBlitz
</a>
`;

    const element = document.createElement("li");
    element.setAttribute("data-platforms", "windows,mac");
    element.setAttribute(
      "class",
      "Box-row Box-row--hover-gray p-0 rounded-0 mt-0 js-remove-unless-platform"
    );
    element.innerHTML = linkElement;
    return element;
  }

  function addElements() {
    const element = document.querySelector('[data-target="get-repo.modal"] ul');

    if (!element) {
      console.log("element not found");
      return;
    }
    const codeSandboxElement = createCodesandboxElement();
    element.insertBefore(codeSandboxElement, element.firstChild);

    const stackBlitzElement = createStackBlitzElement();
    element.insertBefore(stackBlitzElement, element.firstChild);

    const github1sElement = createGithub1sElement();
    element.insertBefore(github1sElement, element.firstChild);
  }

  addElements();
})();
