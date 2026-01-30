'use client';

/**
 * Skip Links Component for Accessibility
 * Allows keyboard users to skip to main content
 * WCAG 2.1 AA Compliant
 */

export function SkipLinks() {
    return (
        <div className="skip-links">
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <a href="#navigation" className="skip-link">
                Skip to navigation
            </a>
            <a href="#search" className="skip-link">
                Skip to search
            </a>
        </div>
    );
}
