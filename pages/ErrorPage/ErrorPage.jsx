import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 flex items-center justify-center px-6 py-12">
            <div className="text-center max-w-lg w-full">
                {/* Visual Brand/Error Element */}
                <div className="relative mb-8 flex justify-center">
                    <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full w-48 h-48 mx-auto -top-4"></div>
                    <h1 className="relative text-9xl font-black tracking-tight text-slate-800 selection:bg-blue-500 selection:text-white">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl mb-4">
                    Page not found
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-10">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or perhaps it never existed in the first place.
                </p>

                {/* Navigation Links / CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                    >
                        Go back home
                    </a>
                    <a
                        href="/support"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 shadow-sm transform hover:-translate-y-0.5"
                    >
                        Contact support
                    </a>
                </div>

                {/* Footer Hint */}
                <div className="mt-16 border-t border-slate-200 pt-6">
                    <p className="text-xs text-slate-400">
                        Think this is a mistake? Let us know at <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;