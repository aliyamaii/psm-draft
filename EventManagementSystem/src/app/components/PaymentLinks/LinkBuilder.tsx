import { useState } from 'react';
import {
  ArrowRight, DollarSign, Link as LinkIcon, Calendar,
  QrCode, CheckCircle, XCircle, Info, Loader2,
  Copy, Eye
} from 'lucide-react';

interface LinkBuilderProps {
  onComplete?: () => void;
  onCancel?: () => void;
}

export default function LinkBuilder({ onComplete, onCancel }: LinkBuilderProps) {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    slug: '',
    expires: '',
    description: ''
  });
  const [generatedLink, setGeneratedLink] = useState<{ slug: string; url: string } | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateLink = () => {
    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const slug = formData.slug || `payment-${Date.now()}`;
      const url = `https://bcl.my/${slug}`;
      setGeneratedLink({ slug, url });
      setIsGenerating(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handleCopyLink = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const canProceedToStep2 = () => {
    return formData.title.trim() !== '' && formData.amount !== '';
  };

  const canProceedToStep3 = () => {
    return canProceedToStep2() && formData.slug.trim() !== '';
  };

  const canGenerateLink = () => {
    return canProceedToStep3();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Create Payment Link</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? 'bg-[#273480] text-white' : 'bg-gray-200 text-gray-400'
              }`}>1</div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? 'bg-[#273480] text-white' : 'bg-gray-200 text-gray-400'
              }`}>2</div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 3 ? 'bg-[#273480] text-white' : 'bg-gray-200 text-gray-400'
              }`}>3</div>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <XCircle className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Payment Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                      Payment Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g., Summer Festival Early Bird"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    />
                    {formData.title === '' && (
                      <p className="text-xs text-red-500 mt-1">Payment title is required</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                      Payment Amount (RM) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="0.00"
                        step="0.01"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                      />
                    </div>
                    {formData.amount === '' && (
                      <p className="text-xs text-red-500 mt-1">Payment amount is required</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                      Description (Optional)
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="What is this payment link for?"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480] resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!canProceedToStep2()}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: canProceedToStep2() ? '#E11A27' : '#9CA3AF' }}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Link Configuration</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                      Custom URL Slug <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">https://bcl.my/</span>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        placeholder="your-custom-link"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                      />
                    </div>
                    {formData.slug === '' && (
                      <p className="text-xs text-red-500 mt-1">URL slug is required</p>
                    )}
                    <div className="flex items-start gap-2 mt-2">
                      <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600">
                        Choose a memorable URL slug for your payment link. This will be part of the public payment URL.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#273480' }}>
                      Expiration Date (Optional)
                    </label>
                    <input
                      type="date"
                      name="expires"
                      value={formData.expires}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#273480]"
                    />
                    <div className="flex items-start gap-2 mt-2">
                      <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600">
                        Set an expiration date to automatically disable the payment link. Leave empty for no expiration.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-800 mb-1">Preview Your Link</p>
                        <p className="text-xs text-blue-600">
                          Your payment link will be: <strong>https://bcl.my/{formData.slug || 'your-custom-link'}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!canProceedToStep3()}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: canProceedToStep3() ? '#E11A27' : '#9CA3AF' }}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              {showSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>Payment Link Created!</h3>
                  <p className="text-gray-600 mb-6">Your payment link is ready to use</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#273480' }}>Review & Generate</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <LinkIcon className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Payment Title</p>
                            <p className="text-sm font-medium" style={{ color: '#273480' }}>{formData.title}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 mb-2">
                          <DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Payment Amount</p>
                            <p className="text-sm font-medium" style={{ color: '#273480' }}>RM {formData.amount || '0.00'}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <LinkIcon className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Payment URL</p>
                            <p className="text-sm font-medium text-blue-600">
                              https://bcl.my/{formData.slug || 'your-custom-link'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-green-800 mb-1">Payment Link Features</p>
                            <ul className="text-xs text-green-600 space-y-1">
                              <li>• Instant payment processing</li>
                              <li>• Multiple payment methods supported</li>
                              <li>• Real-time transaction tracking</li>
                              <li>• Automatic email notifications</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleGenerateLink}
                      disabled={!canGenerateLink() || isGenerating}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: canGenerateLink() && !isGenerating ? '#E11A27' : '#9CA3AF' }}
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          Generate Payment Link
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </>
          )}

          {/* Success Message with Actions */}
          {showSuccess && generatedLink && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-green-800">Payment Link Generated Successfully!</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Payment URL:</p>
                      <div className="flex items-center gap-2">
                        <a
                          href={generatedLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-medium"
                          style={{ color: '#273480' }}
                        >
                          {generatedLink.url}
                        </a>
                        <button
                          onClick={handleCopyLink}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                          title="Copy link"
                        >
                          {copied ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Quick Actions:</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setShowSuccess(false);
                            setShowSuccess(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#273480] text-white hover:opacity-90 transition-colors text-sm"
                        >
                          <QrCode className="w-4 h-4" />
                          Generate QR Code
                        </button>
                        <button
                          onClick={() => {
                            const subject = encodeURIComponent(`Payment Link: ${formData.title}`);
                            const body = encodeURIComponent(`Here's the payment link: ${generatedLink.url}`);
                            window.location.href = `mailto:?subject=${subject}&body=${body}`;
                          }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm"
                        >
                          Share via Email
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2 border-t border-green-200">
                      <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600">
                        You can manage this payment link from your Payment Links dashboard. Track clicks, conversions, and revenue in real-time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          {showSuccess && generatedLink && (
            <button
              onClick={onComplete}
              className="px-6 py-2 rounded-lg bg-[#273480] text-white hover:opacity-90 transition-colors"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}