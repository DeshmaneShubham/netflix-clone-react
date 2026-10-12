export default function Login() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="container" style={{ maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <h1 className="fw-bold" style={{ color: '#e50914' }}>NETFLIX</h1>
        </div>

        <div className="card bg-black text-light border-0 shadow-lg">
          <div className="card-body p-4">
            <h2 className="h4 mb-3">साइन इन करा (Sign In)</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">ईमेल (Email)</label>
                <input
                  type="email"
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">पासवर्ड (Password)</label>
                <input
                  type="password"
                  className="form-control bg-dark text-light border-secondary"
                  placeholder="••••••••"
                />
              </div>

              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-danger">
                  साइन इन
                </button>
              </div>
            </form>

            <p className="text-muted text-center mt-3 mb-0 small">
              खाता नाही? <a href="/register" className="text-decoration-underline text-light">रेजिस्टर करा</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
