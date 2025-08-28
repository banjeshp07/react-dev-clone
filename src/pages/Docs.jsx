import React from 'react';
import DocsSidebar from '../components/DocsSidebar';
import DocsContent from '../components/DocsContent';

const Docs = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <DocsSidebar />
        <DocsContent />
      </div>
    </div>
  );
};

export default Docs;
