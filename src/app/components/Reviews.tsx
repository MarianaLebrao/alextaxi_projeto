import { useEffect, useState, type FormEvent } from "react";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { ChevronLeft, ChevronRight, Quote, Send, Star } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { db } from "@/config/firebase";

type Review = {
  id: string;
  name: string;
  route: string;
  rating: number;
  comment: string;
};

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const activeReview = reviews[activeIndex] ?? reviews[0];

  useEffect(() => {
    const recentReviews = query(
      collection(db, "siteReviews"),
      orderBy("createdAt", "desc"),
      limit(30),
    );

    return onSnapshot(
      recentReviews,
      (snapshot) => {
        setReviews(
          snapshot.docs.map((review) => ({
            id: review.id,
            ...(review.data() as Omit<Review, "id">),
          })),
        );
        setIsLoading(false);
        setLoadError("");
      },
      () => {
        setIsLoading(false);
        setLoadError("Não foi possível carregar as avaliações agora. Tente novamente mais tarde.");
      },
    );
  }, []);

  useEffect(() => {
    if (activeIndex >= reviews.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, reviews.length]);

  useEffect(() => {
    if (reviews.length < 2) {
      return;
    }

    const carouselTimer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % reviews.length);
    }, 6500);

    return () => window.clearInterval(carouselTimer);
  }, [reviews.length]);

  const handlePreviousReview = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % reviews.length);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newReview = {
      name: name.trim(),
      route: route.trim(),
      rating,
      comment: comment.trim(),
    };

    if (
      newReview.name.length < 2 ||
      newReview.route.length < 2 ||
      newReview.comment.length < 10
    ) {
      setFeedbackMessage("Informe seu nome, a corrida e um comentário com pelo menos 10 caracteres.");
      return;
    }

    setIsSubmitting(true);
    setFeedbackMessage("");

    try {
      await addDoc(collection(db, "siteReviews"), {
        ...newReview,
        createdAt: serverTimestamp(),
      });
      setActiveIndex(0);
      setName("");
      setRoute("");
      setRating(5);
      setComment("");
      setFeedbackMessage("Obrigado! Sua avaliação foi publicada.");
    } catch {
      setFeedbackMessage("Não foi possível publicar sua avaliação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="avaliacoes" className="relative overflow-hidden bg-stone-950 px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.14),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-2 text-sm text-yellow-200">
            Avaliações dos clientes
          </span>
          <h2 className="mb-4 text-4xl md:text-5xl">Quem viaja recomenda</h2>
          <p className="text-lg text-stone-300 md:text-xl">
            Veja os comentários de clientes e deixe sua própria avaliação sobre o serviço.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur">
            <CardContent className="p-6 md:p-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="rounded-2xl bg-yellow-400 p-3 text-stone-950">
                  <Quote className="h-7 w-7" />
                </div>
                {reviews.length > 1 && (
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={handlePreviousReview}
                      className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                      aria-label="Avaliação anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={handleNextReview}
                      className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                      aria-label="Próxima avaliação"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </div>

              {activeReview ? (
                <>
                  <RatingStars rating={activeReview.rating} />
                  <p className="my-8 text-2xl leading-relaxed text-white md:text-3xl">
                    "{activeReview.comment}"
                  </p>
                  <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
                    <strong className="text-xl">{activeReview.name}</strong>
                    <span className="text-stone-300">{activeReview.route}</span>
                  </div>
                  {reviews.length > 1 && (
                    <div className="mt-8 flex gap-2">
                      {reviews.map((review, index) => (
                        <button
                          key={review.id}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            index === activeIndex ? "w-10 bg-yellow-400" : "w-2.5 bg-white/30"
                          }`}
                          aria-label={`Mostrar avaliação ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="py-12">
                  <h3 className="mb-3 text-2xl">
                    {isLoading ? "Carregando avaliações..." : "Seja a primeira pessoa a avaliar"}
                  </h3>
                  <p className="text-stone-300">
                    {loadError || "As avaliações enviadas aparecerão aqui para todos os visitantes."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-yellow-300/20 bg-white text-stone-950 shadow-2xl">
            <CardContent className="p-6 md:p-8">
              <h3 className="mb-2 text-3xl">Avalie o serviço</h3>
              <p className="mb-8 text-stone-600">
                Sua experiência ajuda novos clientes a escolherem um transporte seguro.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="review-name">Seu nome</Label>
                  <Input
                    id="review-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Ex.: Ana Souza"
                    className="h-12 bg-stone-100"
                    minLength={2}
                    maxLength={60}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review-route">Tipo de corrida ou destino</Label>
                  <Input
                    id="review-route"
                    value={route}
                    onChange={(event) => setRoute(event.target.value)}
                    placeholder="Ex.: Aeroporto, viagem, corrida executiva"
                    className="h-12 bg-stone-100"
                    minLength={2}
                    maxLength={80}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Nota</Label>
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const starValue = index + 1;

                      return (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setRating(starValue)}
                          className="rounded-lg p-1 transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                          aria-label={`Dar ${starValue} ${starValue === 1 ? "estrela" : "estrelas"}`}
                        >
                          <Star
                            className={`h-8 w-8 ${
                              starValue <= rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-stone-300"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review-comment">Comentário</Label>
                  <Textarea
                    id="review-comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder="Conte como foi sua experiência..."
                    className="min-h-32 bg-stone-100"
                    minLength={10}
                    maxLength={280}
                    required
                  />
                </div>

                {feedbackMessage && <p className="text-sm text-stone-600" role="status">{feedbackMessage}</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full bg-yellow-400 text-stone-950 hover:bg-yellow-300"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? "Enviando..." : "Enviar avaliação"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
