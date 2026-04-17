import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import CaseStudyHero from '../components/CaseStudyHero';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry_label: string;
  headline: string;
  description: string;
  hero_media_url: string;
  hero_media_type: 'video' | 'image';
  background_color: string;
  overlay_color: string;
  overlay_opacity: number;
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCase() {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (!error && data) {
        setCaseStudy(data as CaseStudy);
      }
      setLoading(false);
    }

    if (slug) {
      fetchCase();
    }
  }, [slug]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#020817', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 32, height: 32, border: '2px solid rgba(255,255,255,0.1)', borderTopColor: 'rgba(255,255,255,0.6)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div style={{ minHeight: '100vh', background: '#020817', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Barlow, sans-serif' }}>
        <p>Case study not found.</p>
      </div>
    );
  }

  return (
    <>
      <CaseStudyHero
        industryLabel={caseStudy.industry_label}
        headline={caseStudy.headline}
        description={caseStudy.description}
        mediaUrl={caseStudy.hero_media_url}
        mediaType={caseStudy.hero_media_type}
        backgroundColor={caseStudy.background_color}
        overlayColor={caseStudy.overlay_color}
        overlayOpacity={caseStudy.overlay_opacity}
      />
    </>
  );
}
