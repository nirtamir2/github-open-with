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
      "Box-row Box-row--hover-gray p-0 rounded-0 mt-0"
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

    const github1sUrl = `https://github1s.com${window.location.pathname}`;

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
      "Box-row Box-row--hover-gray p-0 rounded-0 mt-0"
    );
    github1sLi.innerHTML = github1s;
    return github1sLi;
  }

  function createGithubDevElement() {
    const githubDevSvg = `<svg width="16" height="16" class="octicon octicon-file-zip github-open-with-color-scheme-color mr-3" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<style>
@media (prefers-color-scheme: dark) {
.github-open-with-color-scheme-color{
  color: white;
}
}
@media (prefers-color-scheme: light) {
.github-open-with-color-scheme-color{
color: black
}
}
</style>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 35.8662C0 16.5375 15.6625 0.866249 35 0.866249C54.3288 0.866249 70 16.5375 70 35.8662C70 36.5827 69.9784 37.2942 69.9359 38H56.9521C57.1286 36.7921 57.2221 35.4747 57.2221 34.0375C57.2221 30.2167 55.8658 27.0958 53.6346 24.6458C53.9846 23.7621 55.1658 20.2038 53.2846 15.3825C53.2846 15.3825 50.3533 14.4433 43.7033 18.97C40.9033 18.1912 37.9283 17.8062 34.9533 17.7887C31.9783 17.8062 29.0033 18.1912 26.2033 18.97C19.5096 14.4433 16.5783 15.3825 16.5783 15.3825C14.6971 20.2038 15.8783 23.7621 16.2721 24.6458C14.0263 27.0958 12.67 30.2167 12.67 34.0375C12.67 47.4483 20.8396 50.4583 28.6125 51.3333C27.6121 52.2083 26.7108 53.7512 26.3958 56.0146C24.395 56.91 19.3229 58.4558 16.2021 53.1037C16.2021 53.1037 14.3558 49.7438 10.8413 49.4987C10.8413 49.4987 7.42583 49.455 10.5962 51.625C10.5962 51.625 12.8975 52.7042 14.49 56.7437C14.49 56.7437 16.5433 63.5513 26.2792 61.4396C26.2873 63.0593 26.2999 64.4586 26.3095 65.5252C26.3172 66.3793 26.3229 67.0199 26.3229 67.3896C26.3229 68.32 25.6812 69.4021 23.9312 69.0725C10.0275 64.4496 0 51.3333 0 35.8662Z" fill="currentColor"/>
<path d="M69.0639 41.3916L62.4327 38.1988C61.6651 37.8293 60.7479 37.9852 60.1455 38.5875L38.4375 58.3801C37.8536 58.9125 37.8543 59.8318 38.4389 60.3633L40.2121 61.9753C40.6901 62.4098 41.41 62.4418 41.9246 62.0514L68.066 42.2199C68.9431 41.5546 70.2027 42.1801 70.2027 43.2809V43.2039C70.2027 42.4312 69.7601 41.7268 69.0639 41.3916Z" fill="#0065A9"/>
<g filter="url(#filter0_d)">
<path d="M69.0639 66.6256L62.4327 69.8184C61.6651 70.1881 60.7479 70.0321 60.1455 69.4297L38.4375 49.6372C37.8536 49.1048 37.8543 48.1855 38.4389 47.654L40.2121 46.042C40.6901 45.6075 41.41 45.5755 41.9246 45.9659L68.066 65.7973C68.9431 66.4627 70.2027 65.8371 70.2027 64.7364V64.8133C70.2027 65.586 69.7601 66.2904 69.0639 66.6256Z" fill="#007ACC"/>
</g>
<g filter="url(#filter1_d)">
<path d="M62.433 69.819C61.6652 70.1884 60.7479 70.0321 60.1455 69.4297C60.8877 70.172 62.1569 69.6463 62.1569 68.5965V39.4207C62.1569 38.371 60.8877 37.8452 60.1455 38.5875C60.7479 37.9851 61.6652 37.829 62.433 38.1982L69.063 41.3866C69.7597 41.7216 70.2027 42.4263 70.2027 43.1993V64.818C70.2027 65.591 69.7597 66.2957 69.063 66.6307L62.433 69.819Z" fill="#1F9CF0"/>
</g>
<g style="mix-blend-mode:overlay" opacity="0.25">
<path style="mix-blend-mode:overlay" opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M60.8217 69.8804C61.3286 70.0779 61.9066 70.0652 62.4182 69.819L69.0441 66.6308C69.7404 66.2957 70.1831 65.5911 70.1831 64.818V43.1994C70.1831 42.4263 69.7404 41.7216 69.0442 41.3866L62.4182 38.1982C61.7468 37.8751 60.9609 37.9543 60.3716 38.3827C60.2875 38.4439 60.2073 38.5122 60.132 38.5875L47.4474 50.16L41.9222 45.9659C41.4079 45.5755 40.6885 45.6075 40.2108 46.042L38.4387 47.654C37.8544 48.1855 37.8537 49.1048 38.4372 49.6372L43.2288 54.0086L38.4372 58.3801C37.8537 58.9125 37.8544 59.8317 38.4387 60.3633L40.2108 61.9752C40.6885 62.4098 41.4079 62.4418 41.9222 62.0514L47.4474 57.8573L60.132 69.4297C60.3327 69.6305 60.5683 69.7817 60.8217 69.8804ZM62.1423 46.7027L52.5175 54.0086L62.1423 61.3146V46.7027Z" fill="url(#paint0_linear)"/>
</g>
</g>
<defs>
<filter id="filter0_d" x="29.6667" y="37.3599" width="48.8694" height="40.9904" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="4.16667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="51.8121" y="29.6667" width="26.7239" height="48.684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="4.16667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="54.0916" y1="38" x2="54.0916" y2="70.0173" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0">
<rect width="70" height="70" fill="white"/>
</clipPath>
</defs>
</svg>
`;

    const githubDevUrl = `https://github.dev${window.location.pathname}`;

    const githubDev = `
   <a class="d-flex flex-items-center color-text-primary text-bold no-underline p-3" href="${githubDevUrl}">
   ${githubDevSvg}
   Open in Github Dev
</a>
`;

    const githubDevLi = document.createElement("li");
    githubDevLi.setAttribute(
      "class",
      "Box-row Box-row--hover-gray p-0 rounded-0 mt-0"
    );
    githubDevLi.innerHTML = githubDev;
    return githubDevLi;
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
    element.setAttribute(
      "class",
      "Box-row Box-row--hover-gray p-0 rounded-0 mt-0"
    );
    element.innerHTML = linkElement;
    return element;
  }

  function addElements() {
    const element = document.querySelector(
      '[data-target="get-repo.modal"] #local-panel ul li:last-of-type'
    );

    if (!element) {
      console.log("element not found");
      return;
    }

    const { parentElement } = element;
    if (!parentElement) {
      console.log("parentElement not found for element", element);
      return;
    }
    const codeSandboxElement = createCodesandboxElement();
    parentElement.insertBefore(codeSandboxElement, element.nextSibling);

    const stackBlitzElement = createStackBlitzElement();
    parentElement.insertBefore(stackBlitzElement, element.nextSibling);

    const github1sElement = createGithub1sElement();
    parentElement.insertBefore(github1sElement, element.nextSibling);

    const githubDevElement = createGithubDevElement();
    parentElement.insertBefore(githubDevElement, element.nextSibling);
  }

  addElements();
})();
