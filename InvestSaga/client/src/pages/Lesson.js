import React from 'react';
import Layout from '../components/Layout/Layout';

function Lesson(props) {
  return (
    <Layout>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
        <iframe
          title="YouTube Video"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src="https://www.youtube.com/embed/iU7RxlIZ9b8" // Replace VIDEO_ID with your YouTube video's ID
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  );
}

export default Lesson;