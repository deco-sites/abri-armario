import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy title
 */
export interface Props {
  /** @description Title */
  title: string;

  /** @description Description */
  description: string;

  /** @description Image one */
  imageOne: ImageWidget;

  /** @description Image two */
  imageTwo: ImageWidget;

  /** @description Image Three */
  imageThree: ImageWidget;

  /** @description Image Four */
  imageFour: ImageWidget;

  /** @description Image five */
  imageFive: ImageWidget;

  /** @description Image's alt text */
  alt: string;
}

export default function bannerColecao({
  title,
  description,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  alt,
}: Props) {
  return (
    <section class="container w-full px-4 md:px-0 mx-auto">
      <div class={`row-span-1`}>
        {title &&
          (
            <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
              <h2 class="text-lg leading-5 font-semibold uppercase">
                {title}
              </h2>

              <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
            </div>
          )}
      </div>
      <div class="grid  grid-cols-[50%_minmax(25%,_25%)_25%]  gap-4">
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageOne}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageTwo}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageThree}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageFour}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageFive}
          alt={alt}
        />
      </div>
    </section>
  );
}
