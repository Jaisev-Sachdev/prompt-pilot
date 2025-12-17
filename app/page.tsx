'use client';

import { Header } from '@/components/layout/header';
import { LandingHero } from '@/components/landing/landing-hero';
import { SplitScreen } from '@/components/layout/split-screen';
import { WriterInput } from '@/components/input/writer-input';
import { SmartTagArray } from '@/components/tags/smart-tag-array';
import { LivePreview } from '@/components/preview/live-preview';
import { Toast } from '@/components/ui/toast';
import { usePromptBuilder } from '@/hooks/use-prompt-builder';
import { useScrollPosition } from '@/hooks/use-scroll-position';

export default function Home() {
  const {
    userInput,
    setUserInput,
    tags,
    updateTag,
    megaPrompt,
    handleCopy,
    showToast,
    isAnalyzing,
    triggerAnalysis,
  } = usePromptBuilder();



  const { isLandingVisible, scrollToMain, scrollToTop } = useScrollPosition();

  const hasInput = userInput.trim().length > 0;

  return (
    <div className="relative">
      {/* Header - responsive to scroll */}
      <Header
        isLandingVisible={isLandingVisible}
        onScrollToTop={scrollToTop}
      />

      {/* Landing Page Section */}
      <LandingHero onScrollToMain={scrollToMain} />

      {/* Main Application Section */}
      {/* Main Application Section */}
      <div id="main-app" className="h-screen snap-section retro-bg overflow-hidden flex flex-col">
        <div className="flex-1 pt-24 pb-6 px-6 max-w-7xl mx-auto w-full h-full text-box-fixed-size">
          <SplitScreen
            leftPanel={
              <div className="h-full flex flex-col">
                <div className="flex-1 min-h-0">
                  <WriterInput
                    value={userInput}
                    onChange={setUserInput}
                    isAnalyzing={isAnalyzing}
                    onAnalyze={() => triggerAnalysis()}
                  />


                </div>
                <div className="px-6 pb-6">
                  <SmartTagArray
                    tags={tags}
                    onTagChange={updateTag}
                    hasInput={hasInput}
                  />
                </div>
              </div>
            }
            rightPanel={
              <LivePreview
                prompt={megaPrompt}
                onCopy={handleCopy}
                copied={showToast}
              />
            }
          />
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message="Prompt copied to clipboard!"
        show={showToast}
      />
    </div>
  );
}

