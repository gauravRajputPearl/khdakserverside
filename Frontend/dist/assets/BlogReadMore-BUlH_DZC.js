import{a as x,r as l,j as e,H as a,l as g,b as p}from"./index-gWcE0IPY.js";import{p as h}from"./index-fbcM_5bc.js";const b=()=>{const o=x();console.log(o),l.useState("");const[t,i]=l.useState(null),m=async()=>{const r=await(await fetch(`https://khdakserverside.onrender.com/api/v1/blog/${o==null?void 0:o.title}`)).json();i(r==null?void 0:r.data)};return l.useEffect(()=>{m()},[]),console.log(t),e.jsx(e.Fragment,{children:t?e.jsx(e.Fragment,{children:Array.isArray(t)&&t.length>0&&t.map(s=>{var r,n,c;return e.jsxs("div",{className:"space-y-2 mb-8 mx-2",children:[e.jsxs("div",{className:"border rounded-lg border-slate-300 p-3 mt-6 sm:mt-10 sm:mx-48 bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 text-center",children:[e.jsx("h1",{className:"font-bold text-4xl text-gray-700",children:s==null?void 0:s.title}),e.jsxs(a,{children:[e.jsx("title",{children:(r=s==null?void 0:s.title)==null?void 0:r.slice(0,60)}),e.jsx("link",{rel:"canonical",href:`${(n=window==null?void 0:window.location)==null?void 0:n.href}`}),e.jsx("meta",{name:"description",content:`${(c=s==null?void 0:s.description)==null?void 0:c.slice(0,160)}`})]})]}),e.jsxs("div",{className:"border rounded-lg  border-slate-300 p-6 bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 space-y-6 text-center flex flex-col sm:mx-48",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:s==null?void 0:s.profileImage,alt:"",className:"mx-auto rounded-lg sm:w-[800px] sm:h-[500px]"}),e.jsx("img",{src:g,alt:"watermark",className:"absolute top-[50%] right-[50%]  opacity-50 w-[100px] md:w-[300px]",style:{transform:"translate(50%,-50%)"}})]}),e.jsx("div",{id:"blogDescription",children:h(s==null?void 0:s.description)})]})]})})}):e.jsx(p,{})})};export{b as default};
