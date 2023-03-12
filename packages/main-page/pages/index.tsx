import { Button } from '@miranda/base';
import cn from 'classnames';

const Index = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center">
        <h1 className="text-5xl">Welcome to main-page!</h1>
        <p>
          Miranda is a design system for development projects, our objective is
          to share components in most libraries, frameworks and languages
        </p>
        <button className={cn(Button.elevated.container)}>
          <span className={cn(Button.elevated.text)}>Get started</span>
        </button>
      </div>
      <div>
        <div>
          <h3>Amazing examples using miranda</h3>
          <div className="flex flex-wrap justify-between">
            <article>
              {/* image */}
              <h4>React</h4>
            </article>
            <article>
              {/* image */}
              <h4>React</h4>
            </article>
            <article>
              {/* image */}
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div>
          <h3>Resources</h3>
          <div className="flex flex-wrap justify-between">
            <article>
              {/* image */}
              <h4>Actions</h4>
              <p>Action components help people achieve an aim.</p>
            </article>
            <article>
              {/* image */}
              <h4>Communication</h4>
              <p>Communication components provide helpful information.</p>
            </article>
            <article>
              {/* image */}
              <h4>Navigation</h4>
              <p>Navigation components help people move through the UI.</p>
            </article>
            <article>
              {/* image */}
              <h4>Selection</h4>
              <p>Selection components let people specify choices.</p>
            </article>
            <article>
              {/* image */}
              <h4>Text inputs</h4>
              <p>Text input components let people enter and edit text.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
