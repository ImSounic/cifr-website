// Legal copy for CleanSlate, kept verbatim-equivalent to the app's bundled
// assets/legal/*.html. Rendered as trusted, static prose on the marketing site
// so Google Play submission and Google OAuth verification have public URLs that
// actually render (Supabase Edge Functions force text/plain on browser GETs).

export const PRIVACY_UPDATED = "March 30, 2026";
export const TERMS_UPDATED = "March 30, 2026";

export const privacyHtml = `
<div class="section"><h2>1. Introduction</h2>
<p>Welcome to CleanSlate ("App," "we," "us," "our"). We're committed to protecting your privacy and being transparent about how we handle your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.</p>
<p>CleanSlate is designed for students sharing apartments and dorms to manage household chores collaboratively. We take data privacy seriously, especially because our users include students who may be under 18 in some jurisdictions.</p></div>
<div class="section"><h2>2. Information We Collect</h2>
<h3>2.1 Account Information</h3><ul>
<li><strong>Email address</strong> — used for account creation and authentication</li>
<li><strong>Password</strong> — securely hashed and never stored in plain text</li>
<li><strong>Name</strong> — displayed to roommates in your household</li>
<li><strong>Profile photo</strong> — optional, stored in our cloud storage</li></ul>
<h3>2.2 Household and Chore Data</h3><ul>
<li><strong>Household membership</strong> — which students share a space and household roles (admin/member)</li>
<li><strong>Chore assignments</strong> — chores assigned to you, due dates, completion status, and priority</li>
<li><strong>Chore preferences</strong> — which chores you prefer or dislike (rating scale)</li>
<li><strong>Availability data</strong> — your class schedule and free time to optimize chore assignments</li>
<li><strong>Weekend patterns</strong> — whether you go home on weekends</li></ul>
<h3>2.3 Calendar Integration Data</h3><ul>
<li><strong>Google Calendar access token</strong> — if you connect Google Calendar, we store a refresh token to sync chores automatically</li>
<li><strong>Calendar events</strong> — we read your calendar to schedule chores around your classes and activities</li>
<li><strong>Outlook calendar support</strong> — limited Outlook calendar integration (in development)</li></ul>
<h3>2.4 Notification and Device Data</h3><ul>
<li><strong>Push notification tokens</strong> — Firebase Cloud Messaging tokens to send you chore reminders</li>
<li><strong>Device information</strong> — device type, OS version, and app version (for crash reporting only)</li></ul>
<h3>2.5 Analytics and Crash Reports</h3><ul>
<li><strong>Usage analytics</strong> — which features you use (e.g. joining a household, completing a chore), aggregated via Firebase Analytics and never tied to your name or email beyond an opaque user identifier</li>
<li><strong>Crash reports</strong> — if the app crashes, we collect error stack traces via Firebase Crashlytics to improve stability</li></ul>
<h3>2.6 Information You Don't Provide Directly</h3><ul>
<li><strong>IP address</strong> — automatically logged by our server</li>
<li><strong>Cookies and similar technologies</strong> — used for session management and authentication</li></ul></div>
<div class="section"><h2>3. How We Use Your Information</h2><ul>
<li>To create and maintain your account</li>
<li>To assign and manage household chores fairly and efficiently</li>
<li>To sync your chores with Google Calendar</li>
<li>To send push notifications for chore reminders and household updates</li>
<li>To improve the app and add new features</li>
<li>To detect and prevent fraud or security threats</li>
<li>To comply with legal obligations</li></ul>
<p><strong>We do not sell, rent, or trade your personal information to third parties.</strong> We also do not use your data for advertising or marketing purposes beyond maintaining the service.</p></div>
<div class="section"><h2>4. Data Storage and Security</h2>
<h3>4.1 Where Your Data Is Stored</h3><ul>
<li><strong>Supabase (PostgreSQL database)</strong> — account info, household data, chore assignments</li>
<li><strong>Google Cloud Storage</strong> — profile photos</li>
<li><strong>Firebase</strong> — push notification tokens, crash logs, usage analytics</li></ul>
<h3>4.2 Security Measures</h3><ul>
<li>All data transmitted to our servers uses HTTPS encryption (TLS 1.2+)</li>
<li>Passwords are hashed using industry-standard algorithms (bcrypt)</li>
<li>Database access is controlled with Row Level Security (RLS) — you can only see your own household's data</li>
<li>We do not store payment information</li>
<li>OAuth tokens are stored securely and never displayed in the app</li></ul>
<h3>4.3 Data You Control</h3><ul>
<li>Update your profile information anytime</li>
<li>Modify your chore preferences and availability</li>
<li>Disconnect Google Calendar at any time</li>
<li>Delete your account (see section 6)</li></ul></div>
<div class="section"><h2>5. Third-Party Services</h2>
<h3>5.1 Google Services</h3><ul>
<li><strong>Google Sign-In</strong> — for authentication. We don't store your Google password.</li>
<li><strong>Google Calendar API</strong> — to sync chores with your calendar. You control what we access via OAuth scopes.</li>
<li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a></li></ul>
<h3>5.2 Firebase (Google Cloud)</h3><ul>
<li><strong>Firebase Cloud Messaging</strong> — sends push notifications</li>
<li><strong>Firebase Crashlytics</strong> — collects crash reports</li>
<li><strong>Firebase Analytics</strong> — aggregated product usage metrics</li>
<li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase Privacy Policy</a></li></ul>
<h3>5.3 Supabase</h3><ul>
<li><strong>Database hosting and authentication</strong> — stores all your household and chore data</li>
<li><strong>Realtime capabilities</strong> — syncs data across devices in real-time</li>
<li><a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">Supabase Privacy Policy</a></li></ul>
<h3>5.4 Other Services</h3><ul>
<li><strong>Outlook calendar</strong> (in development) — uses Microsoft OAuth for authentication</li></ul>
<p class="callout"><strong>Important:</strong> We are not responsible for the privacy practices of third-party services. When you connect Google Calendar or other services, you authorize CleanSlate to access limited information according to the OAuth scopes you approve.</p></div>
<div class="section"><h2>6. Data Retention and Deletion</h2>
<h3>6.1 How Long We Keep Your Data</h3><ul>
<li><strong>Active accounts</strong> — data is kept as long as your account is active</li>
<li><strong>Deleted accounts</strong> — most data is deleted within 30 days, some retained for legal or security reasons</li>
<li><strong>Crash logs and analytics</strong> — typically retained for 90 days, then automatically deleted</li>
<li><strong>Household data</strong> — deleted when all members leave the household</li></ul>
<h3>6.2 Account Deletion (Right to Be Forgotten)</h3>
<p>You can delete your account anytime from the Settings screen. Deletion includes your account and profile information, chore history and assignments, preferences and calendar tokens, and push notification tokens.</p>
<p><strong>Note:</strong> Household records created by you may not be deleted (other members may still need access to chore history).</p>
<h3>6.3 Data Backups</h3><p>Deleted data may remain in backup systems for up to 90 days before being permanently purged.</p></div>
<div class="section"><h2>7. Your Rights</h2><ul>
<li><strong>Right of Access</strong> — request a copy of your personal data</li>
<li><strong>Right to Correction</strong> — update or correct inaccurate information</li>
<li><strong>Right to Deletion</strong> — delete your account and associated data</li>
<li><strong>Right to Portability</strong> — receive your data in a machine-readable format</li>
<li><strong>Right to Object</strong> — object to certain uses of your data (e.g., analytics)</li></ul>
<p>To exercise these rights, contact us at <strong>support@cifr.studio</strong>. We will respond within 30 days.</p></div>
<div class="section"><h2>8. Children's Privacy (COPPA)</h2>
<p><strong>CleanSlate is designed for users 13 years and older.</strong></p>
<h3>8.1 For Users Under 13</h3><ul>
<li>We do not knowingly collect personal information from children under 13</li>
<li>If we discover a user is under 13, we will delete their account and data</li></ul>
<h3>8.2 For Users 13-18</h3><ul>
<li>We treat teen users with the same privacy protections as adults</li>
<li>We do not use behavioral targeting or sell data to third parties</li>
<li>Profile photos and names are shared only with household members, not publicly</li></ul></div>
<div class="section"><h2>9. California Residents (CCPA)</h2><ul>
<li><strong>Right to Know</strong> — what personal information we collect and how it's used</li>
<li><strong>Right to Delete</strong> — request deletion of your personal data</li>
<li><strong>Right to Opt-Out</strong> — we don't sell data, so this doesn't apply</li>
<li><strong>Right to Non-Discrimination</strong> — we won't discriminate against you for exercising these rights</li></ul></div>
<div class="section"><h2>10. EU Residents (GDPR)</h2><ul>
<li><strong>Legal Basis</strong> — consent and legitimate interests (providing the service)</li>
<li><strong>Data Protection inquiries</strong> — contact support@cifr.studio</li>
<li><strong>Data Transfers</strong> — your data may be transferred to the US</li>
<li><strong>Complaints</strong> — you can file a complaint with your local data protection authority</li></ul></div>
<div class="section"><h2>11. Policy Updates</h2>
<p>We may update this Privacy Policy occasionally. When we make material changes, we will notify you via email or in-app notification and update the "Last Updated" date. Your continued use of CleanSlate after changes constitutes acceptance of the updated policy.</p></div>
<div class="section"><h2>12. Contact Us</h2>
<p class="callout"><strong>Email:</strong> support@cifr.studio<br/><strong>Response Time:</strong> within 7 business days</p></div>
`;

export const termsHtml = `
<div class="section"><h2>1. Acceptance of Terms</h2>
<p>By downloading, installing, or using CleanSlate ("App," "Service"), you agree to be legally bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>
<p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use constitutes acceptance of any modifications.</p></div>
<div class="section"><h2>2. Eligibility</h2><ul>
<li>You must be at least 13 years old to use CleanSlate</li>
<li>If you are under 18, you should review these Terms with a parent or guardian</li>
<li>You represent that you have the authority to agree to these Terms</li></ul></div>
<div class="section"><h2>3. User Accounts and Responsibilities</h2>
<h3>3.1 Account Registration</h3><p>To use CleanSlate, you must provide your email address, a password, your full name, and accurate information about your availability and household situation.</p>
<h3>3.2 Your Responsibilities</h3><ul>
<li><strong>Account Security</strong> — maintain the confidentiality of your password</li>
<li><strong>Accurate Information</strong> — do not impersonate others or create false accounts</li>
<li><strong>Authorized Use</strong> — use CleanSlate only for managing household chores</li>
<li><strong>Prohibited Activities</strong> — do not hack, reverse-engineer, or circumvent security features</li></ul>
<h3>3.3 Multiple Accounts</h3><p>You may not create multiple accounts to circumvent restrictions or deceive other users.</p></div>
<div class="section"><h2>4. Acceptable Use Policy</h2><p>You agree not to use CleanSlate to:</p><ul>
<li>Harass, bully, or discriminate against other household members</li>
<li>Post offensive, abusive, or sexually explicit content</li>
<li>Engage in fraud, deception, or scams</li>
<li>Distribute malware or compromise the App's security</li>
<li>Spam other users</li>
<li>Violate any applicable laws or infringe others' intellectual property rights</li></ul>
<p><strong>Violations may result in account suspension or termination.</strong></p></div>
<div class="section"><h2>5. Intellectual Property Rights</h2>
<h3>5.1 Our Ownership</h3><p>CleanSlate, its design, logo, code, and content are owned by CIFR. You are granted a limited, non-exclusive license to use the App for personal, non-commercial purposes.</p>
<h3>5.2 Your Content</h3><p>You retain ownership of chore information you create. Your name and profile photo remain your property, but you grant CleanSlate a license to display them to household members as needed to operate the Service.</p></div>
<div class="section"><h2>6. Limitation of Liability</h2>
<p class="danger"><strong>IMPORTANT:</strong> CleanSlate is provided "AS IS" without warranties of any kind.</p>
<h3>6.1 No Warranties</h3><p>CleanSlate makes no warranties regarding the App's availability, functionality, or accuracy; that chores will be assigned fairly or on time; that notifications will be delivered reliably; or that calendar syncing will work flawlessly.</p>
<h3>6.2 No Liability for Damages</h3><p>CleanSlate is not liable for lost data, missed chores, household disputes, loss of income or profits, or any indirect, incidental, or consequential damages.</p>
<h3>6.3 Liability Cap</h3><p><strong>In no event shall CleanSlate's total liability exceed $0 USD,</strong> because CleanSlate is a free service. If a paid version exists in the future, liability is capped at the amount you paid in the preceding 12 months.</p></div>
<div class="section"><h2>7. Indemnification</h2><p>You agree to indemnify and hold harmless CIFR from any claims, damages, or expenses arising from your violation of these Terms, your unlawful use of the App, your infringement of others' rights, or your interactions with other household members.</p></div>
<div class="section"><h2>8. Service Availability and Modifications</h2><p>CleanSlate may experience downtime for maintenance, updates, or security patches; we do not guarantee 24/7 availability. We reserve the right to modify features, discontinue the Service at any time, or restrict access based on abuse. If we discontinue CleanSlate permanently, we will provide reasonable notice.</p></div>
<div class="section"><h2>9. Third-Party Services and Links</h2><p>CleanSlate integrates with Google Sign-In and Google Calendar, Firebase for notifications, and Supabase for data storage. Integration does not constitute endorsement or warranty. CleanSlate is not responsible for the availability, security, or functionality of third-party services.</p></div>
<div class="section"><h2>10. Privacy and Data Protection</h2><p>Your use of CleanSlate is governed by our <a href="/cleanslate/privacy">Privacy Policy</a>. By using the App, you consent to our collection and use of data as described in that policy.</p></div>
<div class="section"><h2>11. Account Termination</h2>
<h3>11.1 Your Right to Delete</h3><p>You can delete your account at any time through the Settings screen. Upon deletion, your profile, password, and personal data are removed; household memberships are terminated; and you are unsubscribed from notifications. Chore history may be retained for other household members.</p>
<h3>11.2 Our Right to Suspend or Terminate</h3><p>We may suspend or terminate your account if you violate these Terms, engage in abusive behavior, attempt to compromise security, or remain inactive for extended periods (&gt;2 years).</p></div>
<div class="section"><h2>12. Dispute Resolution</h2><p>If you have a dispute, first try to resolve it informally by contacting support@cifr.studio. Any legal disputes shall be resolved through binding arbitration, not court litigation, and you agree to waive your right to a jury trial. Either party may bring a claim in small claims court if below the court's jurisdiction limit.</p></div>
<div class="section"><h2>13. Governing Law</h2><p>These Terms are governed by the laws of California, without regard to its conflict of law principles.</p></div>
<div class="section"><h2>14. Severability</h2><p>If any provision of these Terms is found invalid or unenforceable, that provision shall be modified to the minimum extent necessary, and the remaining provisions shall continue in effect.</p></div>
<div class="section"><h2>15. Entire Agreement</h2><p>These Terms, together with the Privacy Policy and any other policies posted in the App, constitute the entire agreement between you and CleanSlate regarding the Service.</p></div>
<div class="section"><h2>16. Contact Information</h2><p class="callout"><strong>Email:</strong> support@cifr.studio<br/><strong>Response Time:</strong> within 7 business days</p></div>
`;
