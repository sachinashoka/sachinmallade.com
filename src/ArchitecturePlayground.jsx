export default function ArchitecturePlayground() {
  return (
    <div className="playground-shell-wrap">
      <section className="playground-shell" aria-label="Architecture Playground Workspace">
        <header className="playground-scenario">
          <p className="playground-scenario__eyebrow">Architecture Playground</p>
          <h2 className="playground-scenario__title">Design Your Enterprise AI Architecture</h2>
          <p className="playground-scenario__text">
            Use the tray to assemble components, shape the system in the canvas, and review guidance before finalizing your architecture.
          </p>
        </header>

        <div className="playground-grid">
          <aside className="playground-tray" aria-label="Component Tray">
            <h3 className="playground-panel-title">Component Tray</h3>
            <div className="playground-tray-list">
              <div className="playground-tray-item">Policy Gateway</div>
              <div className="playground-tray-item">Agent Coordinator</div>
              <div className="playground-tray-item">Validation Layer</div>
              <div className="playground-tray-item">Observability Node</div>
              <div className="playground-tray-item">Human Review Checkpoint</div>
            </div>
          </aside>

          <main className="playground-canvas" aria-label="Build Canvas">
            <h3 className="playground-panel-title">Build Canvas</h3>
            <div className="playground-canvas-empty">
              <p>Canvas is empty.</p>
              <p>Start by selecting components from the left tray.</p>
            </div>
          </main>

          <aside className="playground-guidance" aria-label="Guidance Panel">
            <h3 className="playground-panel-title">Guidance</h3>
            <div className="playground-guidance-block">
              <h4>Architecture Checks</h4>
              <p>Ensure trust, governance, and observability are represented in your design.</p>
            </div>
            <div className="playground-guidance-block">
              <h4>Current Suggestion</h4>
              <p>Add a validation checkpoint between orchestration and external actions.</p>
            </div>
            <div className="playground-guidance-block">
              <h4>Readiness Notes</h4>
              <p>Keep critical decision paths reviewable and auditable for enterprise use.</p>
            </div>
          </aside>
        </div>

        <div className="playground-actions" aria-label="Workspace Actions">
          <button type="button" className="playground-action-button">Reset</button>
          <button type="button" className="playground-action-button">Hint</button>
          <button type="button" className="playground-action-button">See My Architecture</button>
        </div>
      </section>

      <style>{`
        .playground-shell-wrap {
          padding: 4rem 1.5rem 5rem;
          background: #f7f8fa;
          color: #111827;
        }

        .playground-shell {
          max-width: 80rem;
          margin: 0 auto;
          border: 1px solid #e3e7ee;
          border-radius: 18px;
          background: #fcfdff;
          padding: 2rem;
        }

        .playground-scenario {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e7ebf2;
        }

        .playground-scenario__eyebrow {
          margin: 0;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4b5563;
        }

        .playground-scenario__title {
          margin: 0.5rem 0 0;
          font-size: 1.4rem;
          line-height: 1.3;
          font-weight: 600;
          color: #0f172a;
        }

        .playground-scenario__text {
          margin: 0.65rem 0 0;
          max-width: 68ch;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #374151;
        }

        .playground-grid {
          display: grid;
          grid-template-columns: minmax(0, 22fr) minmax(0, 48fr) minmax(0, 30fr);
          gap: 1.5rem;
          align-items: start;
          min-width: 0;
        }

        .playground-tray,
        .playground-canvas,
        .playground-guidance {
          min-width: 0;
          border: 1px solid #dbe2eb;
          border-radius: 14px;
          background: #ffffff;
          padding: 1rem;
        }

        .playground-panel-title {
          margin: 0;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e8ecf3;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #1f2937;
        }

        .playground-tray {
          padding: 1rem;
        }

        .playground-tray-list {
          margin-top: 1rem;
          display: grid;
          gap: 0.65rem;
        }

        .playground-tray-item {
          padding: 0.6rem 0.65rem;
          border: 1px solid #e1e7f0;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.35;
          color: #1f2937;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          background: #fbfcff;
        }

        .playground-canvas {
          min-height: 34rem;
          padding: 1rem;
          display: grid;
          grid-template-rows: auto 1fr;
        }

        .playground-canvas-empty {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.35rem;
          color: #475569;
          padding: 1rem;
        }

        .playground-canvas-empty p {
          margin: 0;
          line-height: 1.5;
          max-width: 40ch;
        }

        .playground-guidance {
          padding: 1rem;
        }

        .playground-guidance-block {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eef2f7;
        }

        .playground-guidance-block h4 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1f2937;
        }

        .playground-guidance-block p {
          margin: 0.45rem 0 0;
          max-width: 36ch;
          font-size: 0.92rem;
          line-height: 1.55;
          color: #475569;
        }

        .playground-actions {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #e7ebf2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .playground-action-button {
          border: 1px solid #d6dde8;
          border-radius: 10px;
          background: #ffffff;
          color: #1f2937;
          font-size: 0.9rem;
          font-weight: 600;
          line-height: 1.2;
          padding: 0.6rem 0.95rem;
        }

        @media (max-width: 1100px) {
          .playground-shell-wrap {
            padding: 3rem 1.25rem 4rem;
          }

          .playground-shell {
            padding: 1.5rem;
          }

          .playground-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .playground-tray,
          .playground-canvas,
          .playground-guidance {
            width: 100%;
          }

          .playground-canvas {
            min-height: 24rem;
          }

          .playground-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 700px) {
          .playground-shell-wrap {
            padding: 2.25rem 1rem 3rem;
          }

          .playground-shell {
            padding: 1rem;
          }

          .playground-scenario__title {
            font-size: 1.2rem;
          }

          .playground-canvas {
            min-height: 20rem;
          }

          .playground-action-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}
