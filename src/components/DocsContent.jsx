import React from 'react';

const DocsContent = () => {
  return (
    <div className="col-md-9">
      <section id="intro" className="mb-5">
        <h2>Introduction</h2>
        <p>React is a JavaScript library for building user interfaces. It is declarative, component-based, and learn-once write-anywhere.</p>
      </section>

      <section id="getting-started" className="mb-5">
        <h2>Getting Started</h2>
        <p>Install React using npm or yarn and start building components.</p>
        <pre className="bg-light p-3 rounded"><code>npm install react react-dom</code></pre>
      </section>

      <section id="components" className="mb-5">
        <h2>Components</h2>
        <p>Components let you split the UI into independent, reusable pieces.</p>
      </section>

      <section id="hooks" className="mb-5">
        <h2>Hooks</h2>
        <p>Hooks let you use state and other React features without writing a class.</p>
      </section>

      <section id="advanced" className="mb-5">
        <h2>Advanced</h2>
        <p>Learn advanced topics such as context, refs, and optimization techniques.</p>
      </section>
    </div>
  );
};

export default DocsContent;
