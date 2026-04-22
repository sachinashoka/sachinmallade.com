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
            <div className="playground-guidance-block playground-guidance-card playground-guidance-card--critical">
              <h4>Architecture Checks</h4>
              <p>Ensure trust, governance, and observability are represented in your design.</p>
            </div>
            <div className="playground-guidance-block playground-guidance-card playground-guidance-card--partial">
              <h4>Current Suggestion</h4>
              <p>Add a validation checkpoint between orchestration and external actions.</p>
            </div>
            <div className="playground-guidance-block playground-guidance-card playground-guidance-card--strong">
              <h4>Readiness Notes</h4>
              <p>Keep critical decision paths reviewable and auditable for enterprise use.</p>
            </div>
          </aside>
        </div>

        <div className="playground-actions" aria-label="Workspace Actions">
          <button type="button" className="playground-action-button playground-action-button--tertiary">Reset</button>
          <button type="button" className="playground-action-button playground-action-button--secondary">Hint</button>
          <button type="button" className="playground-action-button playground-action-button--primary">See My Architecture</button>
        </div>
      </section>

      <style>{`
        .playground-shell-wrap {
          padding: 4rem 1.5rem 5rem;
          color: #111827;
        }

        .playground-shell {
          max-width: 80rem;
          margin: 0 auto;
          border: 1px solid rgba(58, 66, 78, 0.11);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            0 14px 32px rgba(22, 32, 45, 0.08);
          backdrop-filter: blur(14px) saturate(120%);
          padding: 2rem;
        }

        .playground-scenario {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(64, 74, 86, 0.1);
        }

        .playground-scenario__eyebrow {
          margin: 0;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(43, 52, 63, 0.72);
        }

        .playground-scenario__title {
          margin: 0.5rem 0 0;
          font-size: 1.4rem;
          line-height: 1.3;
          font-weight: 600;
          color: rgba(16, 23, 34, 0.95);
        }

        .playground-scenario__text {
          margin: 0.65rem 0 0;
          max-width: 68ch;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(36, 47, 62, 0.82);
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
          border: 1px solid rgba(61, 72, 85, 0.1);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.68);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.75),
            0 8px 18px rgba(19, 28, 40, 0.05);
          backdrop-filter: blur(10px) saturate(118%);
          padding: 1rem;
        }

        .playground-panel-title {
          margin: 0;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(70, 80, 94, 0.09);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: rgba(28, 39, 53, 0.9);
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
          border: 1px solid rgba(64, 76, 92, 0.12);
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.35;
          color: rgba(28, 39, 53, 0.92);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          background: rgba(255, 255, 255, 0.76);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .playground-tray-item:hover {
          transform: translateY(-1px);
          border-color: rgba(62, 75, 90, 0.2);
          box-shadow: 0 6px 14px rgba(19, 28, 40, 0.08);
        }

        .playground-canvas {
          min-height: 34rem;
          padding: 1rem;
          display: grid;
          grid-template-rows: auto 1fr;
          background:
            linear-gradient(rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0.58)),
            repeating-linear-gradient(
              to right,
              rgba(50, 63, 79, 0.035) 0,
              rgba(50, 63, 79, 0.035) 1px,
              transparent 1px,
              transparent 22px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(50, 63, 79, 0.035) 0,
              rgba(50, 63, 79, 0.035) 1px,
              transparent 1px,
              transparent 22px
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.72),
            0 6px 16px rgba(19, 28, 40, 0.04);
        }

        .playground-canvas-empty {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.35rem;
          color: rgba(44, 57, 73, 0.72);
          padding: 1rem;
        }

        .playground-canvas-empty p {
          margin: 0;
          line-height: 1.5;
          max-width: 40ch;
        }

        .playground-guidance {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.74);
        }

        .playground-guidance-block {
          margin-top: 1rem;
          padding: 0.8rem 0.85rem;
          border-radius: 12px;
          border: 1px solid rgba(66, 78, 92, 0.1);
          background: rgba(255, 255, 255, 0.66);
        }

        .playground-guidance-block h4 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(23, 34, 47, 0.9);
        }

        .playground-guidance-block p {
          margin: 0.45rem 0 0;
          max-width: 36ch;
          font-size: 0.92rem;
          line-height: 1.55;
          color: rgba(45, 58, 75, 0.78);
        }

        .playground-guidance-card--critical {
          border-color: rgba(170, 119, 87, 0.24);
          background: rgba(255, 250, 246, 0.72);
        }

        .playground-guidance-card--partial {
          border-color: rgba(119, 132, 160, 0.24);
          background: rgba(248, 251, 255, 0.72);
        }

        .playground-guidance-card--strong {
          border-color: rgba(118, 149, 124, 0.24);
          background: rgba(247, 253, 248, 0.72);
        }

        .playground-actions {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(64, 74, 86, 0.1);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .playground-action-button {
          border: 1px solid rgba(63, 74, 88, 0.14);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.76);
          color: rgba(25, 36, 50, 0.9);
          font-size: 0.9rem;
          font-weight: 600;
          line-height: 1.2;
          padding: 0.6rem 0.95rem;
          transition:
            border-color 180ms ease,
            background-color 180ms ease,
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .playground-action-button:hover {
          transform: translateY(-1px);
          border-color: rgba(62, 75, 90, 0.2);
          box-shadow: 0 6px 14px rgba(19, 28, 40, 0.08);
        }

        .playground-action-button--tertiary {
          background: rgba(255, 255, 255, 0.62);
          color: rgba(39, 50, 66, 0.8);
        }

        .playground-action-button--secondary {
          background: rgba(247, 250, 255, 0.8);
          color: rgba(24, 37, 56, 0.88);
        }

        .playground-action-button--primary {
          border-color: rgba(43, 55, 72, 0.22);
          background: linear-gradient(180deg, rgba(35, 45, 58, 0.94), rgba(24, 32, 43, 0.96));
          color: rgba(246, 248, 251, 0.96);
          box-shadow: 0 7px 16px rgba(20, 29, 40, 0.2);
        }

        :root[data-theme='dark'] .playground-shell-wrap {
          color: #f1f5f9;
        }

        :root[data-theme='dark'] .playground-shell {
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(19, 24, 31, 0.76);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 16px 34px rgba(0, 0, 0, 0.26);
        }

        :root[data-theme='dark'] .playground-scenario {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        :root[data-theme='dark'] .playground-scenario__eyebrow {
          color: rgba(206, 218, 231, 0.7);
        }

        :root[data-theme='dark'] .playground-scenario__title {
          color: rgba(244, 248, 252, 0.95);
        }

        :root[data-theme='dark'] .playground-scenario__text {
          color: rgba(202, 214, 228, 0.82);
        }

        :root[data-theme='dark'] .playground-tray,
        :root[data-theme='dark'] .playground-canvas,
        :root[data-theme='dark'] .playground-guidance {
          border-color: rgba(255, 255, 255, 0.11);
          background: rgba(23, 30, 39, 0.74);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.09),
            0 10px 20px rgba(0, 0, 0, 0.2);
        }

        :root[data-theme='dark'] .playground-panel-title {
          border-bottom-color: rgba(255, 255, 255, 0.1);
          color: rgba(233, 241, 248, 0.88);
        }

        :root[data-theme='dark'] .playground-tray-item {
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(27, 35, 45, 0.76);
          color: rgba(234, 241, 249, 0.9);
        }

        :root[data-theme='dark'] .playground-tray-item:hover {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 7px 16px rgba(0, 0, 0, 0.24);
        }

        :root[data-theme='dark'] .playground-canvas {
          background:
            linear-gradient(rgba(23, 30, 39, 0.72), rgba(23, 30, 39, 0.72)),
            repeating-linear-gradient(
              to right,
              rgba(213, 225, 238, 0.045) 0,
              rgba(213, 225, 238, 0.045) 1px,
              transparent 1px,
              transparent 22px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(213, 225, 238, 0.045) 0,
              rgba(213, 225, 238, 0.045) 1px,
              transparent 1px,
              transparent 22px
            );
        }

        :root[data-theme='dark'] .playground-canvas-empty {
          color: rgba(196, 210, 225, 0.72);
        }

        :root[data-theme='dark'] .playground-guidance {
          background: rgba(22, 29, 38, 0.78);
        }

        :root[data-theme='dark'] .playground-guidance-block {
          border-color: rgba(255, 255, 255, 0.11);
          background: rgba(28, 36, 46, 0.74);
        }

        :root[data-theme='dark'] .playground-guidance-block h4 {
          color: rgba(235, 243, 251, 0.9);
        }

        :root[data-theme='dark'] .playground-guidance-block p {
          color: rgba(194, 208, 224, 0.78);
        }

        :root[data-theme='dark'] .playground-guidance-card--critical {
          border-color: rgba(209, 144, 103, 0.35);
          background: rgba(65, 45, 36, 0.44);
        }

        :root[data-theme='dark'] .playground-guidance-card--partial {
          border-color: rgba(135, 149, 186, 0.34);
          background: rgba(41, 47, 64, 0.44);
        }

        :root[data-theme='dark'] .playground-guidance-card--strong {
          border-color: rgba(120, 159, 128, 0.34);
          background: rgba(34, 53, 43, 0.44);
        }

        :root[data-theme='dark'] .playground-actions {
          border-top-color: rgba(255, 255, 255, 0.1);
        }

        :root[data-theme='dark'] .playground-action-button {
          border-color: rgba(255, 255, 255, 0.14);
          background: rgba(28, 35, 45, 0.8);
          color: rgba(231, 240, 248, 0.9);
        }

        :root[data-theme='dark'] .playground-action-button:hover {
          border-color: rgba(255, 255, 255, 0.22);
          box-shadow: 0 7px 16px rgba(0, 0, 0, 0.26);
        }

        :root[data-theme='dark'] .playground-action-button--tertiary {
          background: rgba(28, 35, 45, 0.68);
          color: rgba(205, 218, 233, 0.78);
        }

        :root[data-theme='dark'] .playground-action-button--secondary {
          background: rgba(35, 44, 56, 0.78);
          color: rgba(225, 236, 247, 0.86);
        }

        :root[data-theme='dark'] .playground-action-button--primary {
          border-color: rgba(255, 255, 255, 0.2);
          background: linear-gradient(180deg, rgba(247, 250, 253, 0.94), rgba(226, 234, 242, 0.92));
          color: rgba(20, 29, 40, 0.92);
          box-shadow: 0 7px 16px rgba(0, 0, 0, 0.22);
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
